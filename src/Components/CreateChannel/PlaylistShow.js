import React from 'react'
import Song from './Song'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";
import { ActionCableConsumer } from 'react-actioncable-provider'
import { togglePlaylist } from '../../Actions'
import { Button, Segment, List, Container } from 'semantic-ui-react'

class PlaylistShow extends React.Component{

  state = {
    songs: []
  }

  handleClick = () =>{
    this.props.history.push("/my_station")
  }

  componentDidMount = () => {
    this.setState({songs: this.songs(this.props.playlist.id, this.props.userPlaylists)})
  }

  songs = (thisPlaylistId, storePlaylists) => {
    let foundPlaylist = storePlaylists.filter(playlist => playlist.id === thisPlaylistId)
    let foundSongs = foundPlaylist[0].songs
    return foundSongs
  }

  handleReceived = (data) => {
    console.log("FIRING FIRING !", data)
    if (Array.isArray(data)) {
      console.log("LOL")
      this.setState({songs: data})
    } else {
      this.setState({songs: [...this.state.songs, data]})
    }
  }

  render(){
    console.log("What are my props in playlistShow? ", this.props)
    console.log("What are my user playlists in playlistShow? ", this.props.userPlaylists)

    let songs = this.state.songs.map(song => <Song joinId={song.joinId} playlistId={this.props.playlist.id} key={song.id} albumId={song.album_id} id={song.id} imageUrl={song.image_url} previewUrl={song.preview_url} name={song.name}/>)
    return(
      <Segment>
      <ActionCableConsumer channel={{channel: 'PlaylistChannel', playlistId: this.props.playlist.id }} onReceived={(data)=>{this.handleReceived(data)}}/>
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
  return {userPlaylists: state.user.playlists}
}

export default withRouter(connect(mapStateToProps, {togglePlaylist})(PlaylistShow))
