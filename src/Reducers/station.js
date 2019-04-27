import {
  TOGGLE_PLAYLIST,
  LISTEN_TO
 } from '../Actions/types'

const initialState = {
  playlistShow: false,
  listeningTo: null,
}

function stationReducer (state = initialState, action) {
  console.log('my action is:', action, 'my state is:', state);
  switch(action.type) {
    case TOGGLE_PLAYLIST:
    console.log("here")
      return {...state, playlistShow: !state.playlistShow}
    case LISTEN_TO:
    console.log("here in LISTEN_TO action in station reducer, action.payload is:", action.payload)
      return {...state, listeningTo: action.payload}
    default:
      return state
  }
}



export default stationReducer
