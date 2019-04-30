import React from 'react'
import { connect } from 'react-redux'
import { goOnAir } from '../../Actions'
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
    // let data = {...this.state, timestamp: this.timestamp()}
    let data = {
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
    console.log("MediaPlayer is receiving data: ", returnData)
    if (returnData.joining){
      let url = `http://localhost:3000/stations/${this.props.stationId}`
      let data = {
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

  render(){
    console.log("Broadcasting in station ID: ", this.props.stationId)
    console.log("My PROPS in media player are: ", this.props)
    return(
      <Segment className={'largeContainer'} style={{borderStyle: 'solid', borderColor:'grey', boxShadow: '0px 0px 2px 1px grey'}}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      <ActionCableConsumer channel={{channel: 'StationChannel', station_id: this.props.stationId}} onReceived={(data) => {this.handleReceived(data)} }/>
        <ReactAudioPlayer
          onPause = {this.handlePause}
          onPlay = {this.handlePlay}
          floated='left'
          style={{width:'35.3em'}}
          src={this.props.playback.trackUrl}
          autoPlay={false}
          controls
          />
        <div>
        <h1> I am broadcasting: {this.props.broadcasting ? "true" : "false"}</h1>
        <Button onClick={this.broadcast}> Broadcast! </Button>
        <Dropdown style={{padding:'8px', borderRadius:'4px', borderStyle:'solid', borderColor:'rgb(143, 208, 135)', color: 'blue'}} text='Add to playlist' >
          <Dropdown.Menu style={{borderStyle:'solid', borderColor:'green'}}>
            <Dropdown.Item style={{color:'greenrgb(143, 208, 135)'}} text='Playlist 1' />
            <Dropdown.Item text='Playlist 2' />
            <Dropdown.Item text='Playlist 3' />
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
    broadcasting: state.user.broadcasting,
    stationId: state.station.broadcast.stationId,
    playback: {
      trackUrl: state.station.broadcast.trackUrl,
      playing: state.station.broadcast.playing
    }
  }
}

export default connect(mapStateToProps, { goOnAir })(MediaPlayer)
