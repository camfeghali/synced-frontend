import React from 'react'
import Song from './Song'
import { connect } from 'react-redux'
import { togglePlaylist } from '../../Actions'
import { Button, Segment, List, Container } from 'semantic-ui-react'

class PlaylistShow extends React.Component{

  handleClick = () =>{
    this.props.togglePlaylist()
  }

  render(){
    return(
      <Segment>
      <Segment>
        <div>
          <Button onClick = {this.handleClick} floated='left' inverted color='green'> Back </Button>
          <Container textAlign='left'>
            <h1> Playlist Name Goes here... </h1>
          </Container>
        </div>
      </Segment>
      <List celled>
        {<Song/>}
        {<Song/>}
        {<Song/>}
        {<Song/>}
        {<Song/>}
        </List>
      </Segment>
    )
  }

}

export default connect(null, {togglePlaylist})(PlaylistShow)
