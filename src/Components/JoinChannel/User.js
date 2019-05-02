import React from 'react'
import favoriteMonkeyAvatar from'./favoriteMonkeyAvatar.png';
import { List, Item, Button, Image, Segment } from 'semantic-ui-react'

class User extends React.Component{
  render(){
    return(
      <List.Item>
      <Segment textAlign='left' style={{borderStyle: 'solid', borderColor:'grey', boxShadow: '0px 0px 2px 1px grey'}}>
        <Image avatar src={favoriteMonkeyAvatar} />
        <Item.Content textalign='left'>

          <Item.Header as='a' textalign='left'>{this.props.username}</Item.Header>
          <Item.Description >
            Last seen watching{' '}
              <b>Arrested Development</b>
            just now.
          </Item.Description>
          </Item.Content>
          <Button inverted color='blue'>
            Join
          </Button>
          <Button  inverted color='orange'>
            Remove from Favs
          </Button>
          </Segment>
      </List.Item>
    )
  }
}

export default User
