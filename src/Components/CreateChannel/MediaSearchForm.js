import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Segment, Button } from 'semantic-ui-react'

import { getSongs, getAlbums, getArtists } from '../../Actions/mediaActions'


class MediaSearchForm extends Component {

  state = {
    searchTerm: "",
  }

  handleSubmit = () =>{
    this.props.getSongs(this.state.searchTerm)
    this.props.getAlbums(this.state.searchTerm)
    this.props.getArtists(this.state.searchTerm)
  }

  handleChange = (e) =>{
    this.setState({searchTerm: e.target.value})
  }

  render() {
    return (
      <div>
        <Segment>
          <div className="ui search">
            <div className="ui icon input">
              <input onChange={this.handleChange} style={{background: 'rgb(74, 74, 74, 0.15)', width: '35em'}} className="prompt" type="text" placeholder="Look for tunes..."/>
              <i style={{color: 'black'}} className="search icon"></i>
              </div>
              <Button onClick={this.handleSubmit} floated='right' inverted color='purple'> Search </Button>
            <div className="results"></div>
          </div>
        </Segment>
      </div>
    )
  }
}
export default connect(null, { getSongs, getArtists, getAlbums })(MediaSearchForm)
