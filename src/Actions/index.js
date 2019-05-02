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
  ADD_ONLINE_USER,
  GET_ONLINE_USERS,
  REMOVE_OFFLINE_USER
} from './types'

import adapter from '../Utilities/adapter'

export const getOnlineUsers = () => {
  return (dispatch) => {
    adapter.getOnlineUsers()
    .then(resp => resp.json())
    .then(data => {
      dispatch({type: GET_ONLINE_USERS, payload: data})
    })
  }
}

export const addOnlineUser = (user) => {
  return {type: ADD_ONLINE_USER, payload :user}
}

export const removeOfflineUser = (user) => {
  return {type: REMOVE_OFFLINE_USER, payload :user}
}

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

export const logOut = (username) => {
  console.log("FIRIN!")
  localStorage.setItem("token", null)
  return (dispatch) => {
    adapter.logOutUser(username)
    .then(resp => resp.json)
    .then(data => {
      dispatch({ type: REMOVE_OFFLINE_USER, payload: username })
      dispatch({ type: LOGOUT, payload: null })
    })
  }
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
