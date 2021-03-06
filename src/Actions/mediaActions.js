import {
  POPULATE_ARTISTS,
  POPULATE_SONGS,
  POPULATE_ALBUMS,
  SELECT_SONG
} from './mediaTypes'

import adapter from '../Utilities/mediaAdapter'

export const selectSong = (songInfo) => {
  return {type: SELECT_SONG, payload: songInfo}
}

export const getSongs = (searchTerm) => {
  return (dispatch) => {
    adapter.getSongs(searchTerm)
    .then(resp => resp.json())
    .then(data => {
      console.log("Return data from song fetch is: ", data)
      dispatch({type: POPULATE_SONGS, payload: data})
    })
  }
}

export const getArtists = (searchTerm) => {
  return (dispatch) => {
    adapter.getArtists(searchTerm)
    .then(resp => resp.json())
    .then(data => {
      dispatch({type: POPULATE_ARTISTS, payload: data})
    })
  }
}

export const getAlbums = (searchTerm) => {
  return (dispatch) => {
    adapter.getAlbums(searchTerm)
    .then(resp => resp.json())
    .then(data => {
      dispatch({type: POPULATE_ALBUMS, payload: data})
    })
  }
}
