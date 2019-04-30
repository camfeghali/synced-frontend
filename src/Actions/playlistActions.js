import {
  CREATE_PLAYLIST
} from './playlistTypes'

import adapter from '../Utilities/playlistsAdapter'


export const createPlaylist = (playlistName, username) => {
  return (dispatch) => {
    console.log("create playlists firing!")
    console.log("WITH THIS DATA")
    console.log("Playlist name:", playlistName)
    console.log("username:", username)
    adapter.createPlaylist(playlistName, username)
    .then(resp => resp.json())
    .then(data => {
      console.log('%c Playlists returned from GET to Songs Controller ', 'background: #9c9c9c; color: #ff0000', data)
      dispatch({type: CREATE_PLAYLIST, payload: data})
    })
  }
}
