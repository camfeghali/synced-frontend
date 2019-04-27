import {
  TOGGLE_PLAYLIST,
  LISTEN_TO,
  CREATE_USER,
  PERSIST_USER,
  LOGIN,
  LOGOUT
} from './types'

import adapter from '../Utilities/adapter'

export const togglePlaylist = () => {
  return {type: TOGGLE_PLAYLIST}
}

export const listenTo = (stationId) => {
  return (dispatch) => {
    adapter.listenTo(stationId)
    dispatch({type: LISTEN_TO, payload: stationId})
  }
}

export const createUser = (userInfo) => {
  return (dispatch) => {
    adapter.createUser(userInfo)
    .then(resp => resp.json())
    .then(userData => {
      localStorage.setItem("token", userData.token)
      dispatch({type: CREATE_USER, payload: userData})
    })
  }

}

export const persistUser = () => {
  return (dispatch) => {
    adapter.persistUser()
    .then(resp => resp.json())
    .then(data => {
      dispatch({
      type: PERSIST_USER, payload: data.user
    })})
  }
}

export const loginUser = (userInfo) => {
  return (dispatch) => {
    adapter.loginUser(userInfo)
    .then(resp => resp.json())
    .then(data => {
      localStorage.setItem("token", data.jwt)
      dispatch({
      type: LOGIN, payload: data.user
    })
  })
  }
}

export const logOut = () => {
  localStorage.setItem("token", null)
  return { type: LOGOUT, payload: null }
}
