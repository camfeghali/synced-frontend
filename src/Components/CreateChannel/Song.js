import React from 'react'
import { connect } from 'react-redux'
import { removeFromPlaylist } from '../../Actions/playlistActions'
import { selectSong } from '../../Actions/mediaActions'
import songIcon from './songIcon.png'
import { Image, List, Button, Item } from 'semantic-ui-react'

class Song extends React.Component{

  handleRemove = (e) => {
    let songId = this.props.id
    let playlistId = this.props.playlistId
    this.props.removeFromPlaylist(songId, playlistId)
  }

  handlePlay = (e) => {
    console.log("%c When I click play c%, this is: ","color: red", this)
    let songInfo = {
      trackName: this.props.name,
      albumId: this.props.albumId,
      previewUrl: this.props.previewUrl,
      songId: parseInt(this.props.id),
    }
    console.log("SONG INFO IS: ", songInfo)
    this.props.selectSong(songInfo)
  }

  render(){
    console.log("Props in Song playlist: ", this.props)
    return(
      <List.Item textAlign='left'>
        <Image floated='left' avatar src={songIcon} />
        <Item.Content>
          <Item.Header>{this.props.name}</Item.Header>
          <Item.Content> Album: {this.props.albumId}</Item.Content>
        </Item.Content>
        <Button onClick={this.handleRemove} floated="right" size='mini' inverted color='orange'> Remove </Button>
        <Button onClick={this.handlePlay} floated="right" size='mini' inverted color='green'> Load </Button>
      </List.Item>
    )
  }
}

export default connect(null, { removeFromPlaylist, selectSong })(Song)
