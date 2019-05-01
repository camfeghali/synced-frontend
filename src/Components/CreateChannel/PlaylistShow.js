import React from 'react'
import Song from './Song'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";
import { togglePlaylist } from '../../Actions'
import { Button, Segment, List, Container } from 'semantic-ui-react'

class PlaylistShow extends React.Component{

  handleClick = () =>{
    this.props.history.push("/my_station")
  }

  songs = (thisPlaylistId, playlists) => {
    let foundPlaylist = playlists.filter(playlist => playlist.id === thisPlaylistId)
    let foundSongs = foundPlaylist[0].songs
    console.log("foundPlaylist: ", foundPlaylist)
    console.log("found Songs : ", foundSongs)
    return foundSongs
  }

  render(){
    console.log("What are my props in playlistShow? ", this.props)
    let zongz = this.songs(this.props.playlist.id, this.props.playlists)
    console.log("ZongZ: ", zongz)
    let songs = this.songs(this.props.playlist.id, this.props.playlists).map(song => <Song joinId={song.join} playlistId={this.props.playlist.id} key={song.id} albumId={song.album_id} id={song.id} imageUrl={song.image_url} previewUrl={song.preview_url} name={song.name}/>)
    return(
      <Segment>
      <Segment>
        <div>
          <Button onClick = {this.handleClick} floated='left' inverted color='green'> Back </Button>
          <Container textAlign='left'>
            <h1> {this.props.playlist.name} </h1>
          </Container>
        </div>
      </Segment>
      <List celled>
        {songs}
        </List>
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return {playlists: state.user.playlists}
}



//

export default withRouter(connect(mapStateToProps, {togglePlaylist})(PlaylistShow))
