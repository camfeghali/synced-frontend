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
    if (Array.isArray(data)) {
      console.log("Data is an array: ", data)
      this.setState({songs: data})
    } else {
      console.log("Data is not an array: ", data)
      this.setState({songs: [...this.state.songs, data]})
    }
  }

  render(){
    console.log("Song props are: ", this.state.songs)
    let songs = this.state.songs.map(song => <Song joinId={song.joinId} playlistId={this.props.playlist.id} key={song.id} albumId={song.album_id} album={song.album} artist={song.artist} id={song.id} imageUrl={song.image_url} previewUrl={song.preview_url} name={song.name}/>)
    return(
      <Segment style={{background: 'transparent'}}>
      <ActionCableConsumer channel={{channel: 'PlaylistChannel', playlistId: this.props.playlist.id }} onReceived={(data)=>{this.handleReceived(data)}}/>
      <Segment style={{background: 'transparent'}}>
        <div>
          <Button onClick = {this.handleClick} floated='left' inverted color='green'> Back </Button>
          <Container textAlign='left'>
            <h1 className="white-text"> {this.props.playlist.name} </h1>
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
