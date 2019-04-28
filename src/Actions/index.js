import {
  TOGGLE_PLAYLIST,
  LISTEN_TO,
  CREATE_USER,
  PERSIST_USER,
  LOGIN,
  LOGOUT,
  CONNECT,
  DISCONNECT
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
      console.log("What is my user data ?", userData)
      localStorage.setItem("token", userData.token)
      dispatch({type: CREATE_USER, payload: userData.user.username})
    })
  }

}

export const persistUser = () => {
  return (dispatch) => {
    console.log("In persist user Action, about to call adapter")
      adapter.persistUser()
      .then(resp => resp.json())
      .then(data => {
        console.log("Data returned from server on persist user is:", data)
        if(data.user){
          dispatch({
            type: PERSIST_USER, payload: data.user.username
          })
        }
      })
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

export const connectToStation = (stationId) => {
  return (dispatch) => {
    adapter.listenTo(stationId)
    dispatch({type: CONNECT, payload: stationId})
  }
}

export const disconnectFromStation = (stationId) => {
  return (dispatch) => {
    dispatch({type: DISCONNECT, payload: stationId})
  }
}
