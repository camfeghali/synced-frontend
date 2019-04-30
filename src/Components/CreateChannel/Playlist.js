import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";
import { deletePlaylist } from '../../Actions/playlistActions'
import playlistIcon from './playlistIcon.png'
import { Image, List, Button, Item } from 'semantic-ui-react'

class Playlist extends React.Component{

  deletePlaylist = (e) => {
    this.props.deletePlaylist(e.target.id)
  }

  view = (e) => {
    console.log(e.target.id)
    this.props.history.push(`/my_station/${e.target.id}`)
  }

  render(){
    console.log("Do I have my Songs here?", this.props)
    return(
      <List.Item onClick={this.view} id={this.props.id} textalign='left' >
        <Image onClick={this.view} id={this.props.id} avatar src={playlistIcon} />
        <Item.Content onClick={this.view} id={this.props.id} textalign='left'>

          <Item.Header  onClick={this.view} id={this.props.id} as='a' textalign='left'>{this.props.name}</Item.Header>
          </Item.Content>
          <Button id = {this.props.id} onClick={this.deletePlaylist} floated="right" size='mini' inverted color='red'>
          Delete
          </Button>
      </List.Item>
    )
  }
}



export default withRouter(connect(null, { deletePlaylist })(Playlist))
