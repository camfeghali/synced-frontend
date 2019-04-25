import React from 'react'
import { Segment, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { ActionCableConsumer } from 'react-actioncable-provider'
import ReactAudioPlayer from 'react-audio-player'


class ListeningTo extends React.Component{

  state = {
    stationId: null,
    song_url: null,
    timestamp: null,
    playing: false
  }

  handleReceived = (data) => {
    console.log("data received:", data)
    let audioPlayer = document.querySelector("audio")
    this.setState({
      song_url: data.song_url,
      playing: data.playing,
      timestamp: data.timestamp
    })
    if(data.playing === true){
      audioPlayer.play()
    }else if (data.playing === false){
      audioPlayer.pause()
    }
  }

  handleJoin = () => {
    this.setState({stationId: this.props.listeningTo})
  }


  render(){
    console.log("hooked Up to Station: ", this.props.listeningTo)
    return(
      <Segment style={{borderStyle: 'solid', borderColor:'grey', boxShadow: '0px 0px 2px 1px grey'}}>
      <ActionCableConsumer channel={{channel: 'StationChannel', station_id: this.props.listeningTo}} onReceived={(data) => {this.handleReceived(data)}}/>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <h3 style={{marginBottom:'0px'}}> Listening to ...</h3>
          <div>
          <audio paused ='true' ref="audio_tag" src={this.state.song_url} controls />
          <Button onClick={this.handleJoin} inverted color='green' floated ='right'> Add to Favs </Button>
          </div>
        </div>
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    listeningTo: state.listeningTo
  }
}

export default connect(mapStateToProps)(ListeningTo)
