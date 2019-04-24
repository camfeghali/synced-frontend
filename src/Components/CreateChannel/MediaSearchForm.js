import PropTypes from 'prop-types'
import _ from 'lodash'
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
          <div class="ui search">
            <div class="ui icon input">
              <input style={{background: 'rgb(74, 74, 74, 0.3)'}} class="prompt" type="text" placeholder="Common passwords..."/>
              <i style={{color: 'black'}} class="search icon"></i>
              </div>
            <div class="results"></div>
          </div>
        </Segment>
      </div>
    )
  }
}
export default MediaSearchForm
