import React from 'react'
import { connect } from 'react-redux'
import { goOnAir } from '../../Actions'
import { addToPlaylist } from '../../Actions/playlistActions'
import ReactAudioPlayer from 'react-audio-player'
import { Segment, Dropdown, Button } from 'semantic-ui-react'
import { ActionCableConsumer } from 'react-actioncable-provider'


class MediaPlayer extends React.Component{

  state = {
    stationId: null,
    song_url: "https://p.scdn.co/mp3-preview/c931b6bd0e7d4b9913656d31de6ba4df43699cc2?cid=febb891cfd5e4e45b5153a63683d7c88",
    timestamp: null,
    playing: false,
    firstTime: true
  }

  broadcast = () => {
    this.props.goOnAir()
  }

  sharePlayback = () => {
    let url = `http://localhost:3000/stations/${this.props.stationId}`
    let data = {
      username: this.props.username,
      album: this.props.playback.album,
      albumId: this.props.playback.albumId,
      trackName: this.props.playback.trackName,
      trackUrl: this.props.playback.trackUrl,
      timestamp: this.timestamp(),
      playing: this.state.playing
    }
    let config = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }
    fetch(url, config)
  }

  handlePause = () => {
    this.setState({playing: false}, () => {
    this.sharePlayback()
    })
  }
  handlePlay = () => {
    this.setState({playing: true}, () => {
      this.sharePlayback()
    })
  }

  handleReceived = (returnData) => {
    if (returnData.joining){
      let url = `http://localhost:3000/stations/${this.props.stationId}`
      let data = {
        trackName: this.props.playback.trackName,
        trackUrl: this.props.playback.trackUrl,
        timestamp: this.timestamp(),
        playing: this.state.playing
      }
      let config = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }
      fetch(url, config)
    }
  }

  timestamp = () => {
    let audioPlayer = document.querySelector("audio")
    let timestamp = audioPlayer.currentTime
    return timestamp
  }

  addToPlaylist = (e) => {
    let playlistName = e.target.innerText
    let songId = this.props.playback.songId
    this.props.addToPlaylist(songId, playlistName)
  }

  render(){
    let playlists = this.props.playlists.map( playlist => <Dropdown.Item key={playlist.name} onClick={this.addToPlaylist} text={playlist.name} />)
    return(
      <Segment className={'largeContainer'} style={{background:'transparent'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <ActionCableConsumer channel={{channel: 'StationChannel', station_id: this.props.stationId}} onReceived={(data) => {this.handleReceived(data)} }/>
          <div className='playback-info' >
            <h3 className='white-text white-text playback-text'> Artist: </h3>
            <h3 className='white-text white-text playback-text'> Song: </h3>
            <h3 className='white-text white-text playback-text'> Album: </h3>
          </div>
          <div className='playback-content' >
            <h4 style={{marginTop:'3px'}} className='white-text playback-text'> {this.props.playback.artist} </h4>
            <h4 style={{marginTop:'29px'}}className='white-text playback-text'> {this.props.playback.trackName}  </h4>
            <h4 style={{marginTop:'30px'}}className='white-text playback-text'> {this.props.playback.album}  </h4>
          </div>
          <audio paused ='true' autoPlay={false} ref="audio_tag" src={this.props.playback.trackUrl} onPlay={this.handlePlay} onPause={this.handlePause} controls />
        <div>

        <Button size='large' color='inverted green' onClick={this.broadcast}> Broadcast! </Button>
        <Dropdown className="dropdown-style" text='Add to playlist' >
          <Dropdown.Menu style={{borderStyle:'solid', borderColor:'green'}}>
            {playlists}
          </Dropdown.Menu>
        </Dropdown>
        </div>
      </div>
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    playlists: state.user.playlists,
    username: state.user.username,
    broadcasting: state.user.broadcasting,
    stationId: state.station.broadcast.stationId,
    playback: {
      trackName: state.station.broadcast.trackName,
      artist: state.station.broadcast.artist,
      album: state.station.broadcast.album,
      albumId: state.station.broadcast.albumId,
      songId: state.station.broadcast.trackId,
      trackUrl: state.station.broadcast.trackUrl,
      playing: state.station.broadcast.playing
    }
  }
}

// <ReactAudioPlayer
//   onPause = {this.handlePause}
//   onPlay = {this.handlePlay}
//   floated='left'
//   style={{width:'35.3em'}}
//   src={this.props.playback.trackUrl}
//   autoPlay={false}
//   controls
//   />
//
export default connect(mapStateToProps, { goOnAir, addToPlaylist })(MediaPlayer)
