import React from 'react'
import playlistIcon from './playlistIcon.png'
import { Image, List, Button, Item } from 'semantic-ui-react'

class Playlist extends React.Component{
  render(){
    return(
      <List.Item textalign='left' >
        <Image avatar src={playlistIcon} />
        <Item.Content textalign='left'>

          <Item.Header as='a' textalign='left'>Most Awesome Playlist</Item.Header>
          <Item.Description >
            Believe me{' '}
              <b>I swear</b>
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
