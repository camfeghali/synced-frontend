import React from 'react'
import Playlist from './Playlist'
import PlaylistShow from './PlaylistShow'
import ChannelNameForm from './ChannelNameForm'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { createPlaylist, getPlaylists } from '../../Actions/playlistActions'
import { Segment, List, Container, Button, Popup } from 'semantic-ui-react'


class PlaylistsContainer extends React.Component{

  state = {
    playlistName: ""
  }

  componentDidMount(){
    this.props.getPlaylists(this.props.username)
  }

  createPlaylist = () => {
    this.props.createPlaylist(this.state.playlistName, this.props.username)
  }

  handleChange = (e) => {
    this.setState({playlistName: e.target.value})
  }

  render(){
    console.log("PROPS changing in Playlist Container")
    console.log("What are my props in playlist container? :", this.props.playlists)
    let playlists = this.props.playlists.map(playlist => <Playlist key={playlist.name} id={playlist.id} name={playlist.name} songs={playlist.songs}/>)
    return(
      <Switch>
        <Route
        path="/my_station/:id"
        render={routerProps => {
          let id = parseInt(routerProps.match.params.id);
          let playlist = this.props.playlists.find(playlist => playlist.id === id);
          return <PlaylistShow key={playlist.id} playlist={playlist}/>;
        }}
        />
        <Route
          path="/my_station"
          render={() => {
            return (
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
          }}
        />

      </Switch>
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
