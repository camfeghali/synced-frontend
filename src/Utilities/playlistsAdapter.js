const BASE_URL = `http://localhost:3000/`
const PLAYLISTS_URL = `${BASE_URL}playlists`
const SONG_PLAYLISTS_URL = `${BASE_URL}song_playlists`

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


export default { createPlaylist }
