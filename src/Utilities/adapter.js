const STATION_URL = `http://localhost:3000/stations`
const USERS_URL = `http://localhost:3000/users`
const GET_USER = 'http://localhost:3000/get_user'
const USER_LOGIN = 'http://localhost:3000/login'

const listenTo = (stationId) => {
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
  fetch(url, config)
}

const createUser = (userInfo) => {
  console.log("inside create user action")
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
  console.log("the data i'm sending is:", data)
  return fetch(USERS_URL,config)
}

const persistUser = () => {
  console.log("Inside persist user adapter")
  let token = localStorage.getItem("token")
  console.log("Sending the following token:", token)
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

export default { listenTo, createUser, persistUser, loginUser }
