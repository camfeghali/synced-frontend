import React from 'react'
import { Segment, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { ActionCableConsumer } from 'react-actioncable-provider'
import ReactAudioPlayer from 'react-audio-player'


class ListeningTo extends React.Component{

  handleReceived = (data) => {
    console.log("data received:", data)
  }

  render(){
    console.log("props are:", this.props)
    return(
      <Segment style={{borderStyle: 'solid', borderColor:'grey', boxShadow: '0px 0px 2px 1px grey'}}>
      <ActionCableConsumer channel={{channel: 'StationChannel', stationId: this.props.listeningTo}} onReceived={(data) => {this.handleReceived(data)}}/>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <h3 style={{marginBottom:'0px'}}> Listening to ...</h3>
          <div>
          <ReactAudioPlayer
            floated='left'
            style={{width:'35.3em'}}
            src="my_audio_file.ogg"
            autoPlay
            controls
            />
          <Button onClick={this.handleClick} inverted color='green' floated ='right'> Add to Favs </Button>
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
