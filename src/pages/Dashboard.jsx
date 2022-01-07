import { Button, Container, Typography } from "@mui/material"
import { signOut } from "firebase/auth"
import React from "react"
import { connect } from "react-redux"
import { Navigate } from "react-router-dom"
import { auth } from "../firebase"

const Dashboard = ({ user }) => {
  return user ? (
    <Container>
      <Typography paragraph>This is a protected route!</Typography>
      <Button onClick={() => signOut(auth)}>Sign out</Button>
    </Container>
  ) : (
    <Navigate to="/" />
  )
}
const mapStateToProps = (s) => ({ user: s.user })
export default connect(mapStateToProps)(Dashboard)
