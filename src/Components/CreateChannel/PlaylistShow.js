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
    console.log("what are my props in playlist show? ", this.props)
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

export default withRouter(connect(null, {togglePlaylist})(PlaylistShow))
