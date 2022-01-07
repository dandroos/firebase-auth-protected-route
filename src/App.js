import { Box } from "@mui/material"
import { onAuthStateChanged } from "firebase/auth"
import React from "react"
import { connect } from "react-redux"
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom"
import Header from "./components/Header"
import Toast from "./components/Toast"
import { auth } from "./firebase"
import Dashboard from "./pages/Dashboard"
import Home from "./pages/Home"
import { setAppReady, setUser } from "./redux/actions"

const App = ({ dispatch, ready, user }) => {
  onAuthStateChanged(auth, (currentUser) => {
    dispatch(setUser(currentUser))
    if (!ready) {
      dispatch(setAppReady(true))
    }
  })

  return ready ? (
    <BrowserRouter>
      <Box
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Header />
        <Toast />
        <Routes>
          <Route
            index
            element={user ? <Navigate to="/dashboard" /> : <Home />}
          />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Box>
    </BrowserRouter>
  ) : null
}

const mapStateToProps = (s) => ({
  ready: s.ready,
  user: s.user,
})

export default connect(mapStateToProps)(App)
