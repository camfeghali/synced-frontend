import React from 'react'
import Channel from './Channel'
import ChannelSearchForm from './ChannelSearchForm'
import { Segment, List, Container } from 'semantic-ui-react'


class FavoritesContainer extends React.Component{
  render(){
    return(
      <Segment>
      <Segment>
        <div>
          <Container textAlign='left'>
            <h1> On the airways ... </h1>
          </Container>
        </div>
      </Segment>
      {<ChannelSearchForm />}

      <List relaxed>
        {<Channel/>}
        {<Channel/>}
        {<Channel/>}
        {<Channel/>}
        {<Channel/>}
        </List>
      </Segment>
    )
  }
}

export default FavoritesContainer
