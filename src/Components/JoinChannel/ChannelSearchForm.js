import PropTypes from 'prop-types'
import _ from 'lodash'
import React, { Component } from 'react'
import { Search } from 'semantic-ui-react'

class SearchExampleCategory extends Component {

  state = {
    isLoading: true,
    value: "",
    results: true
  }

  handleValueChange = () =>{

    console.log("changing")
  }

  render() {
    // const { isLoading, value, results } = this.state

    return (
      <div class="ui search">
        <div class="ui icon input">
          <input placeholder="Look for channels ..." style={{background: 'rgb(74, 74, 74, 0.3)'}} class="prompt" type="text" />
          <i style={{color: 'black'}} class="search icon"></i>
          </div>
        <div class="results"></div>
      </div>
    )
  }
}
export default SearchExampleCategory
