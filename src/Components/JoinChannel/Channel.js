import React from 'react'
import { Image, List, Button, Item, Segment } from 'semantic-ui-react'

class Channel extends React.Component{
  render(){
    return(
      <List.Item>
      <Segment textAlign='left'>
        <Image avatar src='https://react.semantic-ui.com/images/avatar/small/daniel.jpg' />
        <Item.Content textAlign='left'>
          <Item.Header as='a' textAlign='left'>Daniel Louise</Item.Header>
          <Item.Description >
            Last seen watching{' '}
            <a>
              <b>Arrested Development</b>
            </a>{' '}
            just now.
          </Item.Description>
          </Item.Content>
          <Button  inverted color='blue'>
            Join
          </Button>
          <Button  inverted color='purple'>
            Add to Favs
          </Button>
          </Segment>
      </List.Item>
    )
  }
}

export default Channel
