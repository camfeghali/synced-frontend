import React from 'react'
import { Segment, Container } from 'semantic-ui-react'

class ListeningTo extends React.Component{
  render(){
    return(
      <Segment>
        <Container textAlign='left'>
          <h1> Currently listening to ...</h1>
        </Container>
      </Segment>
    )
  }
}

export default ListeningTo
