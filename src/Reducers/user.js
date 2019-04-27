import {
  CREATE_USER,
  PERSIST_USER,
  LOGIN,
  LOGOUT
 } from '../Actions/types'

const initialState = {
  user: null
}

function userReducer (state = initialState, action) {
  // console.log('my action is:', action, 'my state is:', state);
  switch(action.type) {
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

export default userReducer
