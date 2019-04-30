import {
  // TOGGLE_PLAYLIST,
  // LISTEN_TO,
  // CREATE_USER,
  // PERSIST_USER,
  // LOGIN,
  // LOGOUT
 } from '../Actions/types'

import { combineReducers } from 'redux'

import userReducer from './user'
import stationReducer from './station'
import mediaReducer from './media'

export default combineReducers({
  user: userReducer,
  station: stationReducer,
  media: mediaReducer
})
