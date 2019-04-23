import React from 'react'
import ReactAudioPlayer from 'react-audio-player'
import { Segment, Dropdown, List } from 'semantic-ui-react'

class MediaPlayer extends React.Component{
  render(){
    return(
      <Segment className={'largeContainer'}>
        <List>
          <List.Item textAlign='left'>
          <ReactAudioPlayer
            floated='left'
            style={{width:'57.3em'}}
            src="my_audio_file.ogg"
            autoPlay
            controls
            />
            <Dropdown text='Add to playlist'>
              <Dropdown.Menu>
                <Dropdown.Item text='New' />
                <Dropdown.Item text='Open...' description='ctrl + o' />
                <Dropdown.Item text='Save as...' description='ctrl + s' />
              </Dropdown.Menu>
            </Dropdown>
          </List.Item>
        </List>
      </Segment>
    )
  }
}

export default MediaPlayer
