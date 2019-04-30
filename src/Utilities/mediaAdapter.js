const BASE_URL = `http://localhost:3000/`
const SONGS_URL = `${BASE_URL}songs`
const ARTISTS_URL = `${BASE_URL}artists`
const ALBUMS_URL = `${BASE_URL}albums`

const getSongs = (searchTerm) => {
  console.log("My search term is:", searchTerm)
  console.log('%c getSongs firing in mediaActions! ', 'background: #222; color: #80058b')
  return fetch(`${SONGS_URL}?searchTerm=${searchTerm}`)
}

const getAlbums = (searchTerm) => {
  console.log('%c getAlbums firing in mediaActions! ', 'background: #222; color: #80058b')
  return fetch(`${ALBUMS_URL}?searchTerm=${searchTerm}`)
}

const getArtists = (searchTerm) => {
  console.log('%c getArtists firing in mediaActions! ', 'background: #222; color: #80058b')
  return fetch(`${ARTISTS_URL}?searchTerm=${searchTerm}`)
}

export default { getSongs, getAlbums, getArtists }
