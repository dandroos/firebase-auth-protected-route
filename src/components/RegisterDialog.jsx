import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Portal,
  TextField,
} from "@mui/material"
import { createUserWithEmailAndPassword } from "firebase/auth"
import React, { useState } from "react"
import { connect } from "react-redux"
import { useNavigate } from "react-router-dom"
import { auth } from "../firebase"
import { setError, setRegisterForm } from "../redux/actions"

const RegisterDialog = ({ dispatch, isOpen }) => {
  const [fields, setFields] = useState({
    register_email: "",
    register_password: "",
  })

  const handleClose = () => {
    dispatch(setRegisterForm(false))
  }

  const handleChange = (e) => {
    setFields({
      ...fields,
      [e.target.id]: e.target.value,
    })
  }

  const navigate = useNavigate()

  const register = async (e) => {
    e.preventDefault()
    try {
      await createUserWithEmailAndPassword(
        auth,
        fields.register_email,
        fields.register_password
      )
      handleClose()
      navigate("/dashboard")
    } catch (error) {
      // console.log(error.message)
      if (/email-already-in.use/gi.test(error.message)) {
        dispatch(
          setError({
            isOpen: true,
            msg: "An account already exists for that email address",
          })
        )
      }
    }
  }

  return (
    <Portal>
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle>Create an account</DialogTitle>
        <DialogContent>
          <form onSubmit={register}>
            <TextField
              autoFocus
              required
              fullWidth
              type="email"
              value={fields.register_email}
              id="register_email"
              label="Email"
              onChange={handleChange}
            />
            <TextField
              required
              fullWidth
              type="password"
              value={fields.register_password}
              id="register_password"
              label="Password"
              onChange={handleChange}
            />
            <Button type="submit">Sign up</Button>
          </form>
        </DialogContent>
      </Dialog>
    </Portal>
  )
}

const mapStateToProps = (s) => ({ isOpen: s.registerForm })

export default connect(mapStateToProps)(RegisterDialog)
