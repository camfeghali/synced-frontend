import React from 'react'
import { Segment } from 'semantic-ui-react'

class ChannelNameForm extends React.Component{
  render(){
    return(
      <Segment>
        <div className="ui input">
          <input type="text" placeholder="Channel name"/>
          <a className="ui label" >
          <h4> Channel Name</h4>
        </a>
        </div>
      </Segment>
    )
  }
}

export default ChannelNameForm
