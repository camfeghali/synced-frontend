import React from 'react'
import ReactAudioPlayer from 'react-audio-player'
import { Segment, Dropdown, List } from 'semantic-ui-react'

class MediaPlayer extends React.Component{
  render(){
    return(
      <Segment className={'largeContainer'} style={{borderStyle: 'solid', borderColor:'grey', boxShadow: '0px 0px 2px 1px grey'}}>

      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <ReactAudioPlayer
          floated='left'
          style={{width:'57.3em'}}
          src="my_audio_file.ogg"
          autoPlay
          controls
          />
        <div>
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
