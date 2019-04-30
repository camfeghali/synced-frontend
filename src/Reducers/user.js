import {
  CREATE_USER,
  PERSIST_USER,
  LOGIN,
  LOGOUT,
  CONNECT,
  DISCONNECT,
  ON_AIR,
  OFF_AIR,
  LOAD_PLAYLISTS,
 } from '../Actions/types'

const initialState = {
  username: null,
  token: null,
  tuned: false,
  broadcasting: false,
  playlists: []
}

function userReducer (state = initialState, action) {
  switch(action.type) {
    case CREATE_USER:
      return{...state, username: action.payload}
    case PERSIST_USER:
      return{...state, username: action.payload}
    case LOGIN:
      return {
        ...state,
        username: action.payload.username,
        token: action.payload.token,
      }
    case LOGOUT:
      return {
        ...state,
        username: null,
        token: null,
      }
    case CONNECT:
      return {...state, tuned: true}
    case DISCONNECT:
      return {...state, tuned: false}
    case ON_AIR:
      return {...state, broadcasting: true}
    case OFF_AIR:
      return {...state, broadcasting: false}
    case LOAD_PLAYLISTS:
    return state
    default:
      return state
  }
}

export default userReducer
