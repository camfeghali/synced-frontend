import {
  TOGGLE_PLAYLIST,
  LISTEN_TO
} from './types'

export const togglePlaylist = () => {
  return {type: TOGGLE_PLAYLIST}
}

export const listenTo = (stationId) => {
  return {type: LISTEN_TO, payload: stationId }
}
