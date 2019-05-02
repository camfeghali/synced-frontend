const STATION_URL = `http://localhost:3000/stations`
const USERS_URL = `http://localhost:3000/users`
const GET_USER = 'http://localhost:3000/get_user'
const USER_LOGIN = 'http://localhost:3000/login'
const USER_LOGOUT= 'http://localhost:3000/logout'


const getOnlineUsers = () => {
  console.log("is this firing! ?")
  return fetch(USERS_URL)
}

const connectTo = (stationId) => {
  let url = `${STATION_URL}/${stationId}`

  let data = {
    stationId: stationId,
    joining: true
  }
  let config = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }
  console.log("hitting this url: ", url)
  console.log("sending this data: ", data)
  return fetch(url, config)
}

const createUser = (userInfo) => {
  let data = {
    user: {
      username: userInfo.username,
      password: userInfo.password
    }
  }
  let config = {
      method: "POST",
      mode: "cors",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
  }
  return fetch(USERS_URL,config)
}

const persistUser = () => {
  let token = localStorage.getItem("token")
  let config = {
    method: "GET",
    headers: {
      "content-type" : "application/json",
      accepts : "application/json",
      authorization : `${token}`
    }
  }
  return fetch(GET_USER, config)
}

const logOutUser = (username) => {
  return fetch(`${USER_LOGOUT}?username=${username}`)
}

const loginUser = (userInfo) => {
  let user = {
    user: userInfo
  }
  let config = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      accepts: "application/json",
    },
    body: JSON.stringify(user)
  }
  return fetch(USER_LOGIN, config)
}

const goOnAir = () => {
  let config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
  }
  return fetch(STATION_URL, config)
}

const goOffAir = (stationId) => {
  console.log("GO OFF AIR IS FIRING!")
  let url = `${STATION_URL}/${stationId}`
  console.log("Hittin this URL", url)
  let config = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  }
  return fetch(url, config)
}

export default { connectTo, createUser, persistUser, loginUser, goOffAir, goOnAir, getOnlineUsers, logOutUser }
