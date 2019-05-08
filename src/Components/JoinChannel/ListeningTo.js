import React from 'react'
import { Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { ActionCableConsumer } from 'react-actioncable-provider'


class ListeningTo extends React.Component{

  state = {
    stationId: null,
    trackUrl: null,
    timestamp: null,
    playing: false,
    trackName: null,
    artist: null,
    album: null
  }

  handleReceived = (data) => {
    console.log('%c Receiving This! ', 'background: #222; color: #bada55', data)
    let audioPlayer = document.querySelector("audio")
    this.setState({
      trackUrl: data.trackUrl,
      playing: data.playing,
      timestamp: data.timestamp,
      artist: data.artist,
      trackName: data.trackName,
      album: data.album,
    }, () => {
      // console.log
      if (data.timestamp){
        this.setTimestamp(data.timestamp)
      }
    })
    if(data.playing === true){
      audioPlayer.play()
    }else if (data.playing === false){
      audioPlayer.pause()
    }
  }

  handleJoin = () => {
    this.setState({stationId: this.props.listeningTo}, this.joinChannel())
  }

  setTimestamp = (timestamp) => {
    let stamp = Number.parseFloat(timestamp).toPrecision(3)

    document.querySelector("audio").currentTime = stamp
  }

  render(){
    console.log("Connected To: ", this.props.connectedTo)
    return(
      <Segment className={'largeContainer'} style={{background:'transparent', borderStyle:'solid', borderBottomColor:'rgb(255, 255, 255)'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <ActionCableConsumer channel={{channel: 'StationChannel', station_id: this.props.connectedTo }} onReceived={(data) => {this.handleReceived(data)}}/>
          <div className='playback-info' >
            <h3 style={{marginLeft:'4.8em'}} className='white-text white-text playback-text'> Artist: </h3>
            <h3 style={{marginLeft:'4.8em'}} className='white-text white-text playback-text'> Song: </h3>
            <h3 style={{marginLeft:'4.8em'}} className='white-text white-text playback-text'> Album: </h3>
          </div>
          <div className='playback-content' >
            <h4 style={{marginTop:'3px'}} className='white-text playback-text'> {this.state.artist} </h4>
            <h4 style={{marginTop:'29px'}} className='white-text playback-text'> {this.state.trackName}</h4>
            <h4 style={{marginTop:'30px'}} className='white-text playback-text'> {this.state.album}</h4>
          </div>
          <audio paused ='true' ref="audio_tag" src={this.state.trackUrl} controls />
        <div>
        </div>
      </div>
      </Segment>
    )
  }
}

// <Segment style={{background: 'transparent'}}>
// <ActionCableConsumer channel={{channel: 'StationChannel', station_id: this.props.connectedTo }} onReceived={(data) => {this.handleReceived(data)}}/>
//   <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
//     <h4 style={{marginBottom:'0px'}}> Connected to station {this.props.connectedTo ? this.props.connectedTo : null}</h4>
//     <div>
//     <audio paused ='true' ref="audio_tag" src={this.state.trackUrl} controls />
//     <Button onClick={this.handleJoin} inverted color='green' floated ='right'> Add to Favs </Button>
//     </div>
//   </div>
// </Segment>
const mapStateToProps = (state) => {
  return{
    connectedTo: state.station.tunedTo.stationId
  }
}

export default connect(mapStateToProps)(ListeningTo)
