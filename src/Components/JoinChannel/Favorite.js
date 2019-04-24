import React from 'react'
import favoriteMonkeyAvatar from'./favoriteMonkeyAvatar.png';
import { List, Item, Button, Image, Segment } from 'semantic-ui-react'

class Favorite extends React.Component{
  render(){
    return(
      <List.Item>
      <Segment textAlign='left' style={{borderStyle: 'solid', borderColor:'grey', boxShadow: '0px 0px 2px 1px grey'}}>
        <Image avatar src={favoriteMonkeyAvatar} />
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

export default Favorite
