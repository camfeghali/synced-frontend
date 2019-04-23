import PropTypes from 'prop-types'
import _ from 'lodash'
import React, { Component } from 'react'
import { Search, Grid, Header, Segment, Label } from 'semantic-ui-react'

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
          <Search
            category onChange={this.handleValueChange} />
    )
  }
}
export default SearchExampleCategory
