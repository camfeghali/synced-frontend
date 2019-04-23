import React from 'react'
import Playlist from './Playlist'
import PlaylistShow from './PlaylistShow'
import { connect } from 'react-redux'
import { togglePlaylist } from '../../Actions'
import { Segment, List, Container, Button } from 'semantic-ui-react'


class PlaylistsContainer extends React.Component{

  handleClick = () =>{
    console.log("Playlist container being clicked!")
    console.log("Available functions:", this.props)
    this.props.togglePlaylist()
  }

  render(){
    console.log("My state is:", this.props)
    return(
      this.props.playlistShow ? <PlaylistShow /> :
      <Segment onClick={this.handleClick}>
      <Segment>
        <div>
          <Button onClick = {this.handleClick} floated='right' inverted color='blue'> Create playlist </Button>
          <Container textAlign='left'>
            <h1> Playlists... </h1>
          </Container>
        </div>
      </Segment>
      <List divided relaxed>
        {<Playlist/>}
        {<Playlist/>}
        {<Playlist/>}
        {<Playlist/>}
        {<Playlist/>}
        </List>
      </Segment>
    )
  }
}

const mapStateToProps = (state) =>{
  console.log("In map state to props, my state is:", state)
  return{
    playlistShow: state.playlistShow,
    togglePlaylist: state.togglePlaylist
  }
}

export default connect(mapStateToProps, {togglePlaylist})(PlaylistsContainer)
