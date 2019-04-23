import React from 'react'
import Favorite from './Favorite'
import { Segment, List, Container } from 'semantic-ui-react'


class FavoritesContainer extends React.Component{
  render(){
    return(
      <Segment style={{borderStyle: 'solid', borderColor:'purple', boxShadow: '0px 0px 2px 1px grey'}}>
      <Segment style={{borderStyle: 'solid', borderColor:'purple', boxShadow: '0px 0px 2px 1px grey'}}>
        <div>
          <Container textAlign='left'>
            <h1> Favorites... </h1>
          </Container>
        </div>
      </Segment>
      <List divided relaxed>
        {<Favorite/>}
        {<Favorite/>}
        {<Favorite/>}
        {<Favorite/>}
        {<Favorite/>}
        </List>
      </Segment>
    )
  }
}

export default FavoritesContainer
