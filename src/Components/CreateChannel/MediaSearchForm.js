import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'

class MediaSearchForm extends Component {

  state = {
    isLoading: true,
    value: "",
    results: true
  }

  handleValueChange = () =>{
    console.log("changing")
  }

  render() {
    return (
      <div>
        <Segment>
          <div className="ui search">
            <div className="ui icon input">
              <input style={{background: 'rgb(74, 74, 74, 0.3)'}} className="prompt" type="text" placeholder="Common passwords..."/>
              <i style={{color: 'black'}} className="search icon"></i>
              </div>
            <div className="results"></div>
          </div>
        </Segment>
      </div>
    )
  }
}
export default MediaSearchForm
