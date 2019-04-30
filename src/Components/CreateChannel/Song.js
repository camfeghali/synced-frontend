import React from 'react'
import songIcon from './songIcon.png'
import { Image, List, Button, Item } from 'semantic-ui-react'

class Song extends React.Component{
  render(){
    return(
      <List.Item textAlign='left'>
        <Image floated='left' avatar src={songIcon} />
        <Item.Content>
          <Item.Header>{this.props.name}</Item.Header>
          <Item.Content> Album: {this.props.albumId}</Item.Content>
        </Item.Content>
        <Button floated="right" size='mini' inverted color='orange'> Remove </Button>
      </List.Item>
    )
  }
}

export default Song
