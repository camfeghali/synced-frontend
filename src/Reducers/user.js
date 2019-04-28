import {
  CREATE_USER,
  PERSIST_USER,
  LOGIN,
  LOGOUT,
  CONNECT,
  DISCONNECT,
  ON_AIR,
  OFF_AIR,
 } from '../Actions/types'

const initialState = {
  username: null,
  token: null,
  tuned: false,
  broadcasting: false
}

function userReducer (state = initialState, action) {
  switch(action.type) {
    case CREATE_USER:
      console.log("creating a user, my payload is:", action.payload)
      return{...state, username: action.payload}
    case PERSIST_USER:
      console.log("PERSIST_USER has run")
      return{...state, username: action.payload}
    case LOGIN:
      return {...state,
        username: action.payload.username,
        token: action.payload.token,
      }
    case LOGOUT:
      return {...state,
        username: null,
        token: null,
      }
    case CONNECT:
    console.log("Hittin CONNECT in user Reducer")
      return {...state, tuned: true}
    case DISCONNECT:
      return {...state, tuned: false}
    // case ON_AIR:
    //   return {...state, user: action.payload}
    // case OFF_AIR:
    //   return {...state, user: action.payload}
    default:
      return state
  }
}

export default userReducer
