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

  render(){
    console.log("Do I have Songs in playlist show? ", this.props.playlist.songs)
    let songs = this.props.playlist.songs.map(song => <Song key={song.name} albumId={song.album_id} id={song.id} imageUrl={song.image_url} previewUrl={song.preview_url} name={song.name}/>)
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

export default withRouter(connect(null, {togglePlaylist})(PlaylistShow))
