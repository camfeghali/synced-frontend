import React from 'react'
import { Segment, Container } from 'semantic-ui-react'

class ListeningTo extends React.Component{
  render(){
    return(
      <Segment style={{borderStyle: 'solid', borderColor:'grey', boxShadow: '0px 0px 2px 1px grey'}}>
        <Container textAlign='left'>
          <h1> Currently listening to ...</h1>
        </Container>
      </Segment>
    )
  }
}

export default ListeningTo
