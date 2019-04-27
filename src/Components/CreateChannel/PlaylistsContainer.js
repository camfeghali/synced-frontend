import React from 'react'
import Playlist from './Playlist'
import PlaylistShow from './PlaylistShow'
import ChannelNameForm from './ChannelNameForm'
import { connect } from 'react-redux'
import { togglePlaylist } from '../../Actions'
import { Segment, List, Container, Button } from 'semantic-ui-react'


class PlaylistsContainer extends React.Component{

  handleClick = () =>{
    this.props.togglePlaylist()
  }

  render(){
    return(
      this.props.playlistShow ? <PlaylistShow /> :
      <Segment onClick={this.handleClick} style={{borderStyle: 'solid', borderColor:'grey', boxShadow: '0px 0px 2px 1px grey'}}>
      <ChannelNameForm> </ChannelNameForm>
      <Segment style={{borderStyle: 'solid', borderColor:'grey', boxShadow: '0px 0px 2px 1px grey'}}>
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
  return{
    playlistShow: state.playlistShow,
    togglePlaylist: state.togglePlaylist
  }
}

export default connect(mapStateToProps, {togglePlaylist})(PlaylistsContainer)
