import {
  TOGGLE_PLAYLIST,
  LISTEN_TO,
  CREATE_USER,
  PERSIST_USER,
  LOGIN,
  LOGOUT,
  CONNECT,
  DISCONNECT,
  ON_AIR,
  OFF_AIR,
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
      dispatch({type: CREATE_USER, payload: userData.user.username})
    })
  }
}

export const persistUser = () => {
  return (dispatch) => {
      adapter.persistUser()
      .then(resp => resp.json())
      .then(data => {
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
  console.log("FIRIN!")
  localStorage.setItem("token", null)
  return { type: LOGOUT, payload: null }
}

export const connectToStation = (stationId) => {
  return (dispatch) => {
    adapter.connectTo(stationId)
    .then(
      dispatch({type: CONNECT, payload: stationId})
    )
  }
}

export const disconnectFromStation = (stationId) => {
  return (dispatch) => {
    dispatch({type: DISCONNECT, payload: stationId})
  }
}

export const goOnAir = () => {
    return (dispatch) => {
      adapter.goOnAir()
      .then(resp => resp.json())
      .then(data => dispatch({type: ON_AIR, payload: data}))
    }
}

export const goOffAir = (stationId) => {
    window.localStorage.setItem("token", null)
    return (dispatch) => {
      adapter.goOffAir(stationId)
      .then(resp => resp.json())
      .then(data => dispatch({type: OFF_AIR, payload: data}))
    }
}
