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
    console.log("about to fetch playlists with username:", this.props.username)
    this.props.getPlaylists(this.props.username)
  }

  createPlaylist = () => {
    this.props.createPlaylist(this.state.playlistName, this.props.username)
  }

  handleChange = (e) => {
    this.setState({playlistName: e.target.value})
  }

  render(){
    console.log("username is: ", this.props.username)
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
              <Segment onClick={this.handleClick} style={{background: 'transparent'}}>
              <ChannelNameForm> </ChannelNameForm>
              <Segment style={{background: 'transparent'}}>
                <div>
                  <Popup
                    on="click"
                    horizontalOffset={-100}
                    position='top right'
                    trigger={<Button floated='right' inverted color='blue'> Create playlist </Button>}
                  >
                  <div className="ui input transparent-background" >
                    <div className="ui icon input transparent-background" >
                      <input onChange={this.handleChange} style={{background: 'rgb(74, 74, 74, 0.05)', width: '10em', textColor:'red'}} className="prompt" type="text" placeholder="Playlist name ..."/>
                      <i style={{color: 'black'}}></i>
                      </div>
                      <Button  onClick={this.createPlaylist} floated='right' inverted color='purple'> Create </Button>
                    <div className="results"></div>
                  </div>
                  </Popup>
                  <Container textAlign='left'>
                    <h1 className = "large-font white-text"> Playlists </h1>
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
