import {
  TOGGLE_PLAYLIST,
  LISTEN_TO,
  CONNECT,
  DISCONNECT,
  ON_AIR,
  OFF_AIR
 } from '../Actions/types'

const initialState = {
  playlistShow: false,
  listeningTo: null,
  tunedTo:{
    stationId: null,
    trackId: null,
    trackUrl: null,
    timestamps: null,
    playing: false,
  },
  broadcast:{
    stationId: null,
    trackId: null,
    trackUrl: null,
    timestamps: null,
    playing: false,
  }
}

function stationReducer (state = initialState, action) {
  switch(action.type) {
    case TOGGLE_PLAYLIST:
      return {...state, playlistShow: !state.playlistShow}
    case LISTEN_TO:
      return {...state, listeningTo: action.payload}
    case CONNECT:
      return {...state, tunedTo: {
        ...state.tunedTo,
        stationId: action.payload
      }}
    // case DISCONNECT:
    //   return {...state, user: action.payload}
    // case ON_AIR:
    //   return {...state, user: action.payload}
    // case OFF_AIR:
    //   return {...state, user: action.payload}
    default:
      return state
  }
}



export default stationReducer
