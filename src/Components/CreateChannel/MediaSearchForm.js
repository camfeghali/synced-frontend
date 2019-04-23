import PropTypes from 'prop-types'
import _ from 'lodash'
import React, { Component } from 'react'
import { Search, Grid, Header, Segment, Label } from 'semantic-ui-react'

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
        <Segment style={{borderStyle: 'solid', borderColor:'grey', boxShadow: '0px 0px 2px 1px grey'}}>
          <Search category valute={this.state.value} onChange={this.handleValueChange} />
        </Segment>
      </div>
    )
  }
}
export default MediaSearchForm
