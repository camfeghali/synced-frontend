import React from 'react'
import { Segment } from 'semantic-ui-react'

class ChannelNameForm extends React.Component{
  render(){
    return(
      <Segment style={{background: 'transparent'}}>
        <div className="ui input">
          <input type="text" placeholder="Channel name"/>
          <h4> Channel Name</h4>
        </div>
      </Segment>
    )
  }
}

export default ChannelNameForm
