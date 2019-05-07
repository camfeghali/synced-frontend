import {
  TOGGLE_PLAYLIST,
  CONNECT,
  DISCONNECT,
  ON_AIR,
  OFF_AIR,
 } from '../Actions/types'

import {
  SELECT_SONG
} from '../Actions/mediaTypes'

const initialState = {
  playlistShow: false,
  // listeningTo: null,
  tunedTo:{
    stationId: null,
    trackId: null,
    trackUrl: null,
    timestamps: null,
    playing: false,
  },
  broadcast:{
    stationId: null,
    album: null,
    trackId: null,
    trackName: null,
    trackUrl: null,
    timestamp: null,
    playing: false,
  }
}

function stationReducer (state = initialState, action) {
  switch(action.type) {
    case TOGGLE_PLAYLIST:
      return {...state, playlistShow: !state.playlistShow}
    case CONNECT:
      return {...state, tunedTo: {
        ...state.tunedTo,
        stationId: action.payload
      }}
    // case DISCONNECT:
    //   return {...state, user: action.payload}
    case ON_AIR:
      return {
        ...state,
        broadcast: {
          ...state.broadcast,
        stationId: action.payload.id,
        // trackName: action.payload.trackName,
        // album: action.payload.album,
        // trackId: action.payload.song_id,
        // trackUrl: action.payload.preview_url,
        // timestamp: action.payload.timestamp,
        // playing: action.payload.playing,
      }}
    case OFF_AIR:
      return {
        ...state,
        broadcast: {
          ...state.broadcast,
        stationId: null,
        trackId: null,
        trackName: null,
        trackUrl: null,
        timestamp: null,
        playing: null,
      }}
    case SELECT_SONG:
    console.log("SELECTED SONG", action.payload)
      return {
        ...state,
        broadcast : {
          ...state.broadcast,
          trackName: action.payload.trackName,
          artist: action.payload.artist,
          album: action.payload.album,
          albumId: action.payload.albumId,
          trackId: action.payload.songId,
          trackUrl: action.payload.previewUrl,
        }
      }
    default:
      return state
  }
}



export default stationReducer
