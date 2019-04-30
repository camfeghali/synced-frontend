import React from 'react'
import Playlist from './Playlist'
import PlaylistShow from './PlaylistShow'
import ChannelNameForm from './ChannelNameForm'
import { connect } from 'react-redux'
import { createPlaylist, getPlaylists } from '../../Actions/playlistActions'
import { Segment, List, Container, Button, Popup } from 'semantic-ui-react'


class PlaylistsContainer extends React.Component{

  state = {
    playlistName: ""
  }

  componentDidMount(){
    console.log("what is username in playlist contianer??", this.props.username)
    this.props.getPlaylists(this.props.username)
  }

  createPlaylist = () => {
    console.log("SENDING:")
    console.log("NAME:", this.state.playlistName)
    console.log("USERNAME:", this.props.username)
    this.props.createPlaylist(this.state.playlistName, this.props.username)
  }

  handleChange = (e) => {
    this.setState({playlistName: e.target.value})
  }

  render(){
    console.log("What are my props in Playlists Container?: ", this.props)
    let playlists = this.props.playlists.map(playlist => <Playlist id={playlist.id} name = {playlist.name}/>)
    return(
      this.props.playlistShow ? <PlaylistShow /> :
      <Segment onClick={this.handleClick} style={{borderStyle: 'solid', borderColor:'grey', boxShadow: '0px 0px 2px 1px grey'}}>
      <ChannelNameForm> </ChannelNameForm>
      <Segment style={{borderStyle: 'solid', borderColor:'grey', boxShadow: '0px 0px 2px 1px grey'}}>
        <div>
          <Popup
            on="Click"
            horizontalOffset={-100}
            position='top right'
            trigger={<Button floated='right' inverted color='blue'> Create playlist </Button>}
          >
          <div className="ui input">
            <div className="ui icon input">
              <input onChange={this.handleChange} style={{background: 'rgb(74, 74, 74, 0.05)', width: '10em', textColor:'red'}} className="prompt" type="text" placeholder="Playlist name ..."/>
              <i style={{color: 'black'}}></i>
              </div>
              <Button onClick={this.createPlaylist} floated='right' inverted color='purple'> Create </Button>
            <div className="results"></div>
          </div>
          </Popup>
          <Container textAlign='left'>
            <h1> Playlists... </h1>
          </Container>
        </div>
      </Segment>
      <List divided relaxed>
          {playlists}
        </List>
      </Segment>
    )
  }
}

const mapStateToProps = (state) =>{
  return{
    username: state.user.username,
    playlists: state.user.playlists,
    currentSongId: state.station.broadcast.stationId
  }
}

export default connect(mapStateToProps, {createPlaylist, getPlaylists})(PlaylistsContainer)
