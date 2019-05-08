import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";
import { deletePlaylist } from '../../Actions/playlistActions'
import playlistIcon from './playlistIcon.png'
import { Image, List, Button, Item } from 'semantic-ui-react'
import { capitalize } from "../../Utilities/utility";

class Playlist extends React.Component{

  deletePlaylist = (e) => {
    this.props.deletePlaylist(e.target.id)
  }

  view = (e) => {
    console.log(e.target.id)
    this.props.history.push(`/my_station/${e.target.id}`)
  }

  render(){
    return(
      <List.Item id={this.props.id} textalign='left' className="playlist-style">
        <Image  onClick={this.view} id={this.props.id} avatar src={playlistIcon} style={{marginLeft: '4px', marginTop: '3px'}}/>
        <Item.Content onClick={this.view} id={this.props.id}>
          <Item.Header style={{marginTop:'3px', marginBottom:'3px'}} as='h3' className="white-text" onClick={this.view} id={this.props.id} textalign='left'>{capitalize(this.props.name)}</Item.Header>
          </Item.Content>
          <Button id = {this.props.id} onClick={this.deletePlaylist} floated="right" size='mini' inverted color='red'>
          Delete
          </Button>
      </List.Item>
    )
  }
}



export default withRouter(connect(null, { deletePlaylist })(Playlist))
