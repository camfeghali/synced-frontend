import React from 'react'
import playlistIcon from './playlistIcon.png'
import { Image, List, Button, Item } from 'semantic-ui-react'

class Playlist extends React.Component{

  render(){
    console.log("props in playlist are: ", this.props)
    return(
      <List.Item textalign='left' >
        <Image avatar src={playlistIcon} />
        <Item.Content textalign='left'>

          <Item.Header as='a' textAlign='left'>{this.props.name}</Item.Header>
          </Item.Content>
          <Button floated="right" size='mini' inverted color='red'>
          Delete
          </Button>
      </List.Item>
    )
  }
}

export default Playlist
