import {
  SET_APP_READY,
  SET_ERROR,
  SET_REGISTER_FORM,
  SET_USER,
} from "./types"

const initialState = {
  ready: false,
  error: {
    isOpen: false,
    msg: "",
  },
  registerForm: false,
  user: null,
}

const reducer = (state = initialState, { type, payload }) => {
  const newState = Object.assign({}, state)

  switch (type) {
    case SET_APP_READY:
      newState.ready = payload
      break
    case SET_ERROR:
      newState.error = payload
      break
    case SET_REGISTER_FORM:
      newState.registerForm = payload
      break
    case SET_USER:
      newState.user = payload
      break
    default:
      break
  }

  return newState
}

export default reducer
