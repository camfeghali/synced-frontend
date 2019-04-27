import {
  TOGGLE_PLAYLIST,
  LISTEN_TO,
  CREATE_USER,
  PERSIST_USER,
  LOGIN,
  LOGOUT
 } from '../Actions/types'

const initialState = {
  playlistShow: false,
  listeningTo: null,
  user: null
}

function myReducer (state = initialState, action) {
  console.log('my action is:', action, 'my state is:', state);
  switch(action.type) {
    case TOGGLE_PLAYLIST:
      return {...state, playlistShow: !state.playlistShow}
    case LISTEN_TO:
      return {...state, listeningTo: action.payload}
    case CREATE_USER:
      return{...state, user: action.payload.user}
    case PERSIST_USER:
      return{...state, user: action.payload}
    case LOGIN:
      return {...state, user: action.payload}
    case LOGOUT:
      return {...state, user: action.payload}
    default:
      return state
  }
}



export default myReducer
