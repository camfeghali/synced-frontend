import React from 'react'
import ReactAudioPlayer from 'react-audio-player'
import { Segment, Container } from 'semantic-ui-react'

class MediaPlayer extends React.Component{
  render(){
    return(
      <Segment>
        <Container textAlign='left'>
        <ReactAudioPlayer
          style={{width:'57.3em'}}
          src="my_audio_file.ogg"
          autoPlay
          controls
          />
        </Container>
      </Segment>
    )
  }
}

export default MediaPlayer
