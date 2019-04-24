import React from 'react'
import playlistIcon from './playlistIcon.png'
import { Image, List, Button, Item, Segment } from 'semantic-ui-react'

class Playlist extends React.Component{
  render(){
    return(
      <List.Item textAlign='left' >
        <Image avatar src={playlistIcon} />
        <Item.Content textAlign='left'>

          <Item.Header as='a' textAlign='left'>Most Awesome Playlist</Item.Header>
          <Item.Description >
            Believe me{' '}
            <a>
              <b>I swear</b>
            </a>{' '}
            Walla.
          </Item.Description>
          </Item.Content>
          <Button floated="right" size='mini' inverted color='red'>
          Delete
          </Button>
      </List.Item>
    )
  }
}

export default Playlist
