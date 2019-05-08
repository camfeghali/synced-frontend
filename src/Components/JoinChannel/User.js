import React from 'react'
import favoriteMonkeyAvatar from'./favoriteMonkeyAvatar.png';
import { List, Item, Button, Image, Segment } from 'semantic-ui-react'
import { capitalize } from "../../Utilities/utility";

class User extends React.Component{
  render(){
    return(
      <List.Item className='playlist-style'>
      <Segment textAlign='left' style={{background: 'transparent'}}>
        <Image avatar src={favoriteMonkeyAvatar} />
        <Item.Content textalign='left'>

          <Item.Header  className='white-text' textalign='left'>{capitalize(this.props.username)}</Item.Header>
          <Item.Description className='white-text' >
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
