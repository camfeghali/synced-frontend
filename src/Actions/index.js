import {
  TOGGLE_PLAYLIST,
  LISTEN_TO,
  CREATE_USER,
  PERSIST_USER,
  LOGIN
} from './types'

export const togglePlaylist = () => {
  return {type: TOGGLE_PLAYLIST}
}

export const listenTo = (stationId) => {
  return {type: LISTEN_TO, payload: stationId }
}

export const createUser = (userInfo) => {
  return (dispatch) => {
    // console.log("whatisthis?:", whatisthis)
    // return {type:CREATE_USER, payload: []}
    console.log("inside create user action")
    let data = {
      user: {
        username: userInfo.username,
        password: userInfo.password
      }
    }
    let url = "http://localhost:3000/users"
    let config = {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",

        },
        body: JSON.stringify(data),
    }
    console.log("the data i'm sending is:", data)
    fetch(url,config)
    .then(resp => resp.json())
    .then(userData => {
      console.log("user data is:", userData)
      localStorage.setItem("token", userData.token)
      console.log("when i create a user, i set localstorage to:", localStorage)
      dispatch({type: CREATE_USER, payload: userData})
    })
  }

}

export const persistUser = () => {
  console.log("persist user is firing!")
  return (dispatch) => {
    let token = localStorage.getItem("token")
    let url = "http://localhost:3000/get_user"
    let config = {
      method: "GET",
      headers: {
        "content-type" : "application/json",
        accepts : "application/json",
        authorization : `${token}`
      }
    }
    console.log("to this url:", url)
    console.log("with this token:", token)
    fetch(url, config)
    .then(resp => resp.json())
    .then(data => {
      console.log("returning data on refresh is:", data)
      dispatch({
      type: PERSIST_USER, payload: data.user
    })})
  }
}

export const loginUser = (userInfo) => {
  return (dispatch) => {
    console.log("info coming from signup form: ", userInfo)
    let token = localStorage.getItem("token")
    console.log("the token is: ", token)
    let url = "http://localhost:3000/login"
    console.log("to this url:", url)
    let user = {
      user: userInfo
    }
    let config = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json",
        // authorization: `${token}`
      },
      body: JSON.stringify(user)
    }
    console.log("when i try to sign up")
    console.log("userInfo")
    fetch(url, config)
    .then(resp => resp.json())
    .then(data => {
      console.log("return data is:", data)
      localStorage.setItem("token", data.jwt)
      dispatch({
      type: LOGIN, payload: data.user
    })
  })
  }
}
