import { TOGGLE_PLAYLIST } from '../Actions/types'

const initialState = {playlistShow: false}

function myReducer (state = initialState, action) {
  console.log('action:', action, 'state:', state);
  switch(action.type) {
    case TOGGLE_PLAYLIST:
      return {...state, playlistShow: !state.playlistShow}
    default:
      return state
  }
}

export default myReducer
