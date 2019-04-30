import {
  CREATE_PLAYLIST,
  DELETE_PLAYLIST,
  GET_PLAYLISTS
} from './playlistTypes'

import adapter from '../Utilities/playlistsAdapter'

export const getPlaylists = (username) => {
  return (dispatch) => {
    console.log("What is username?", username)
    adapter.getPlaylists(username)
    .then(resp => resp.json())
    .then(data => {
      console.log('%c Playlists returned from GET to Songs Controller ', 'background: #9c9c9c; color: #ff0000', data)
      dispatch({type: GET_PLAYLISTS, payload: data})
    })
  }
}

export const createPlaylist = (playlistName, username) => {
  return (dispatch) => {
    adapter.createPlaylist(playlistName, username)
    .then(resp => resp.json())
    .then(data => {
      dispatch({type: CREATE_PLAYLIST, payload: data})
    })
  }
}

export const deletePlaylist = (playlistId) => {
  return (dispatch) => {
    adapter.deletePlaylist(playlistId)
    .then(resp => resp.json())
    .then(data => {
      console.log("Return data from server after delete is: ", data)
      dispatch({type: DELETE_PLAYLIST, payload: data})
    })
  }
}
