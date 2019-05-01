import React from 'react'
import { connect } from 'react-redux'
import { removeFromPlaylist } from '../../Actions/playlistActions'
import songIcon from './songIcon.png'
import { Image, List, Button, Item } from 'semantic-ui-react'

class Song extends React.Component{

  clickHandle = (e) => {
    console.log("target: ", e.target)
    console.log("Song props are: ", this.props)
    this.props.removeFromPlaylist(this.props.id, this.props.playlistId)
  }

  render(){

    return(
      <List.Item textAlign='left'>
        <Image floated='left' avatar src={songIcon} />
        <Item.Content>
          <Item.Header>{this.props.name}</Item.Header>
          <Item.Content> Album: {this.props.albumId}</Item.Content>
        </Item.Content>
        <Button onClick={this.clickHandle} floated="right" size='mini' inverted color='orange'> Remove </Button>
      </List.Item>
    )
  }
}

export default connect(null, { removeFromPlaylist })(Song)
