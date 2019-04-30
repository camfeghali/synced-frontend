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
      return {...state, songs: action.payload}
    case POPULATE_ALBUMS:
      return {...state, albums: action.payload}
    case POPULATE_ARTISTS:
      return {...state, artists: action.payload}
    default:
      return state
  }
}

export default mediaReducer
