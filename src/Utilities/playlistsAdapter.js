const BASE_URL = `http://localhost:3000/`
const PLAYLISTS_URL = `${BASE_URL}playlists`
const SONG_PLAYLISTS_URL = `${BASE_URL}song_playlists`


const removeFromPlaylist = (songId, playlistId) => {
    let data = {
    songId: songId,
    playlistId: playlistId
  }
  let config = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }
  console.log("Data is: ", data)
  console.log("Sending song id: ", songId)
  console.log("Sending playlist id: ", playlistId)
  return fetch(`http://localhost:3000/remove_song`, config)
}

const addToPlaylist = (songId, playlistName) => {
  let data = {
    songId: songId,
    playlistName: playlistName
  }
  let config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }
  return fetch(SONG_PLAYLISTS_URL, config)
}

const createPlaylist = (playlistName, username) => {
  console.log("My username is:", username)
  console.log('%c createPlaylists firing in playlist adapter! ', 'background: #222; color: #80058b')
  let data = {
    username: username,
    playlistName: playlistName
  }
  let config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }
  return fetch(PLAYLISTS_URL, config)
}

const deletePlaylist = (playlistId) => {
  console.log("My playlist name is:", playlistId)
  console.log('%c createPlaylists firing in playlist adapter! ', 'background: #222; color: #80058b')
  let config = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  }
  return fetch(`${PLAYLISTS_URL}/${playlistId}`, config)
}

const getPlaylists = (username) => {
  return fetch(`${PLAYLISTS_URL}?username=${username}`)
}


export default { createPlaylist, getPlaylists, deletePlaylist, addToPlaylist, removeFromPlaylist }
