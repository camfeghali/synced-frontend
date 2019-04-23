import React from 'react'
import { List, Item, Button, Image, Segment } from 'semantic-ui-react'

class Favorite extends React.Component{
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
          <Button inverted color='orange'>
            Join
          </Button>
          </Segment>
      </List.Item>
    )
  }
}

export default Favorite
