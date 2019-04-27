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

export default combineReducers({
  user: userReducer,
  stationReducer: stationReducer
})
