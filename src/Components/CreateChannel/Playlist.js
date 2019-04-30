import React from 'react'
import { connect } from 'react-redux'
import { deletePlaylist } from '../../Actions/playlistActions'
import playlistIcon from './playlistIcon.png'
import { Image, List, Button, Item } from 'semantic-ui-react'

class Playlist extends React.Component{

  deletePlaylist = (e) => {
    console.log("target is:", e.target)
    this.props.deletePlaylist(e.target.id)
  }

  render(){
    console.log("props in playlist are: ", this.props)
    return(
      <List.Item name = {this.props.name} textalign='left' >
        <Image avatar src={playlistIcon} />
        <Item.Content textalign='left'>

          <Item.Header as='a' textAlign='left'>{this.props.name}</Item.Header>
          </Item.Content>
          <Button id = {this.props.id} onClick={this.deletePlaylist} floated="right" size='mini' inverted color='red'>
          Delete
          </Button>
      </List.Item>
    )
  }
}



export default connect(null, { deletePlaylist })(Playlist)
