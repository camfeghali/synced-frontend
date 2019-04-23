import React from 'react'
import { Image, List, Button, Item } from 'semantic-ui-react'

class Song extends React.Component{
  render(){
    return(
      <List.Item textAlign='left'>
        <Image floated='left' avatar src='/images/avatar/small/daniel.jpg' />
        <Item.Content>
          <Item.Header>Song 1</Item.Header>
          Amazing
        </Item.Content>
        <Button floated="right" size='mini' inverted color='orange'> Remove </Button>
      </List.Item>
    )
  }
}

export default Song
