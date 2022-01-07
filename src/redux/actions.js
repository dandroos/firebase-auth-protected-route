import {
  SET_APP_READY,
  SET_ERROR,
  SET_REGISTER_FORM,
  SET_USER,
} from "./types"

export const setAppReady = (payload) => ({
  type: SET_APP_READY,
  payload,
})

export const setError = (payload) => ({
  type: SET_ERROR,
  payload,
})

export const setRegisterForm = (payload) => ({
  type: SET_REGISTER_FORM,
  payload,
})

export const setUser = (payload) => ({
  type: SET_USER,
  payload,
})
