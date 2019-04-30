import {
  POPULATE_ARTISTS,
  POPULATE_SONGS,
  POPULATE_ALBUMS,
} from '../Actions/mediaTypes'

const initialState = {
  songs: [],
  albums: [],
  artists: [],
}

function mediaReducer (state = initialState, action) {
  switch(action.type) {
    case POPULATE_SONGS:
      console.log("IN POPULATE SONGS, PAYLOAD IS: ",action.payload)
      return {...state, songs: action.payload}
    case POPULATE_ALBUMS:
      console.log("IN POPULATE ALBUMS, PAYLOAD IS: ",action.payload)
      return {...state, albums: action.payload}
    case POPULATE_ARTISTS:
      return {...state, artists: action.payload}
    default:
      return state
  }
}

export default mediaReducer
