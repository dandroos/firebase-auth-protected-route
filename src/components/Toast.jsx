import { Alert, Slide, Snackbar } from "@mui/material"
import React from "react"
import { connect } from "react-redux"
import { setError } from "../redux/actions"

const Toast = ({ dispatch, isOpen, msg }) => {
  return (
    <Snackbar
      open={isOpen}
      onClose={() => dispatch(setError({ isOpen: false, msg: msg }))}
      autoHideDuration={3000}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      TransitionComponent={Slide}
      TransitionProps={{
        onExited: () =>
          dispatch(setError({ isOpen: false, msg: "" })),
      }}
    >
      <Alert variant="filled" severity="error">
        {msg}
      </Alert>
    </Snackbar>
  )
}

const mapStateToProps = (s) => ({
  isOpen: s.error.isOpen,
  msg: s.error.msg,
})
export default connect(mapStateToProps)(Toast)
