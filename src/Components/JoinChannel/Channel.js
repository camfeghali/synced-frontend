import React from 'react'
import monkeyAvatar from'./monkeyAvatar.png';
import { Image, List, Button, Item, Segment } from 'semantic-ui-react'

class Channel extends React.Component{
  render(){
    return(
      <List.Item>
      <Segment textAlign='left' style={{borderStyle: 'solid', borderColor:'purple', boxShadow: '0px 0px 2px 1px grey'}}>
        <Image avatar src={monkeyAvatar} />
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
          <Button  floated='right' inverted color='purple'>
            Add to Favs
          </Button>
          </Segment>
      </List.Item>
    )
  }
}

export default Channel
