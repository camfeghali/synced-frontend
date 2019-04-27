import React from 'react'
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
    let url = "http://localhost:3000/stations"
    let config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
    }
    fetch(url, config)
    .then(resp => resp.json())
    .then(data => this.setState({stationId: data.id}, () => {console.log("station Id is:", this.state.stationId)}))

  }

  sharePlayback = () => {
    let url = `http://localhost:3000/stations/${this.state.stationId}`
    let data = {...this.state, timestamp: this.timestamp()}
    let config = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }
    console.log("gonna hit this url:", url)
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
    console.log("my return data is:", returnData)
    if (returnData.joining){
      console.log("first time handle received is firing!!")
      let url = `http://localhost:3000/stations/${this.state.stationId}`
      let data = {...this.state, timestamp: this.timestamp()}
      console.log("state being sent on received from host is:", data)
      let config = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }
      console.log("About to make a fetch, should hit a broadcast in B.E")
      fetch(url, config)
    }
  }

  timestamp = () => {
    let audioPlayer = document.querySelector("audio")
    let timestamp = audioPlayer.currentTime
    return timestamp
  }

  render(){
    return(
      <Segment className={'largeContainer'} style={{borderStyle: 'solid', borderColor:'grey', boxShadow: '0px 0px 2px 1px grey'}}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      <ActionCableConsumer channel={{channel: 'StationChannel', station_id: this.state.stationId}} onReceived={(data) => this.handleReceived(data) }/>
        <ReactAudioPlayer
          onPause = {this.handlePause}
          onPlay = {this.handlePlay}
          floated='left'
          style={{width:'35.3em'}}
          src={this.state.song_url}
          autoPlay={false}
          controls
          />
        <div>
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


export default MediaPlayer
