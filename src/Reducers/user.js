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
  DELETE_PLAYLIST,
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
      return {...state, playlists: [...state.playlists, action.payload]}
    case DELETE_PLAYLIST:
      let playlists = state.playlists.filter(playlist => playlist.id !== action.payload.id)
      return {...state, playlists: playlists}
    case GET_PLAYLISTS:
      return {...state, playlists: action.payload}
    default:
      return state
  }
}

export default userReducer
