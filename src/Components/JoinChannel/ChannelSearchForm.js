import React, { Component } from 'react'
import {  } from 'semantic-ui-react'

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
      <div className="ui search">
        <div className="ui icon input">
          <input placeholder="Look for channels ..." style={{background: 'rgb(74, 74, 74, 0.3)'}} className="prompt" type="text" />
          <i style={{color: 'black'}} className="search icon"></i>

          </div>
        <div className="results"></div>
      </div>
    )
  }
}
export default SearchExampleCategory
