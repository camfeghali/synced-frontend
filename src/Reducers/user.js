import {
  CREATE_USER,
  PERSIST_USER,
  LOGIN,
  LOGOUT,
  CONNECT,
  DISCONNECT,
  ON_AIR,
  OFF_AIR,
 } from '../Actions/types'

 import {
  CREATE_PLAYLIST,
  GET_PLAYLISTS,

} from '../Actions/playlistTypes'

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
      console.log("MY PAYLOAD IS: ", action.payload)
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
    case CREATE_PLAYLIST:
      console.log("INSIDE CREATE PLAYLIST CASE, MY PAYLOAD IS:", action.payload)
      return {...state, playlists: [...state.playlists, action.payload]}
    case GET_PLAYLISTS:
      console.log("INSIDE GET PLAYLIST CASE, MY PAYLOAD IS:", action.payload)
      return {...state, playlists: action.payload}
    default:
      return state
  }
}

export default userReducer
