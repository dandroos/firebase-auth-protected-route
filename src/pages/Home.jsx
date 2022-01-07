import { Button, Container } from "@mui/material"
import { signOut } from "firebase/auth"
import { connect } from "react-redux"
import LoginForm from "../components/LoginForm"
import RegisterDialog from "../components/RegisterDialog"
import { auth } from "../firebase"

function Home({ user }) {
  return (
    <>
      <RegisterDialog />
      <Container maxWidth="sm" sx={{ pb: 6 }}>
        {user ? (
          <Button onClick={() => signOut(auth)}>Sign out</Button>
        ) : (
          <LoginForm />
        )}
      </Container>
    </>
  )
}

const mapStateToProps = (s) => ({
  user: s.user,
})

export default connect(mapStateToProps)(Home)
