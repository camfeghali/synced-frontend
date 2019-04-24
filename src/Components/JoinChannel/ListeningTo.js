import React from 'react'
import { Segment, Container, Button } from 'semantic-ui-react'

class ListeningTo extends React.Component{
  render(){
    return(
      <Segment style={{borderStyle: 'solid', borderColor:'grey', boxShadow: '0px 0px 2px 1px grey'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <h1 style={{marginBottom:'0px'}}> Currently listening to ...</h1>
          <div>
          <Button inverted color='green' floated ='right'> Add to Favs </Button>
          </div>
        </div>
      </Segment>
    )
  }
}

export default ListeningTo
