import React from 'react'
import { Image, List, Button, Item, Segment } from 'semantic-ui-react'

class Playlist extends React.Component{
  render(){
    return(
      <List.Item>
      <Segment textAlign='left'>
        <Image avatar src='https://react.semantic-ui.com/images/avatar/small/daniel.jpg' />
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
          <Button inverted color='red'>
            Delete
          </Button>
          </Segment>
      </List.Item>
    )
  }
}

export default Playlist
