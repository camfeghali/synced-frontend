import {
  TOGGLE_PLAYLIST,
  LISTEN_TO
 } from '../Actions/types'

const initialState = {
  playlistShow: false,
  listeningTo: null
}

function myReducer (state = initialState, action) {
  console.log('action:', action, 'state:', state);
  switch(action.type) {
    case TOGGLE_PLAYLIST:
      return {...state, playlistShow: !state.playlistShow}
    case LISTEN_TO:
      return {...state, listeningTo: action.payload}
    default:
      return state
  }
}

export default myReducer
