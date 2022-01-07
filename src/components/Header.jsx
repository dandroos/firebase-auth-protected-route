import { Container, Typography } from "@mui/material"
import React from "react"
import { connect } from "react-redux"
import logo from "../firebase.png"

const Header = ({ user }) => {
  return (
    <Container component="header">
      <img src={logo} alt="React logo" width={80} />
      <Typography
        variant="h3"
        variantMapping={{ h3: "h1" }}
        gutterBottom
      >
        Firebase Authentication
      </Typography>
      <Typography paragraph>
        {user ? `${user.email} is signed in!` : `No user signed in.`}
      </Typography>
    </Container>
  )
}

const mapStateToProps = (s) => {
  return {
    user: s.user,
  }
}

export default connect(mapStateToProps)(Header)
