import React from 'react'
import { connect } from 'react-redux'
import { removeFromPlaylist } from '../../Actions/playlistActions'
import { selectSong } from '../../Actions/mediaActions'
import songIcon from './songIcon.png'
import { Image, List, Button, Item } from 'semantic-ui-react'

class Song extends React.Component{

  handleRemove = (e) => {
    console.log("Removing song from playlist!")
    console.log("Newly added song:", this)
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
      <List.Item textAlign='left' className='playlist-song-style'>
        <Image style={{marginTop:'14px'}} floated='left' avatar src={songIcon} />
        <Item.Content>
          <Item.Header style={{wordWrap: 'break-word'}} className="white-text lato-font">Track: {this.props.name}</Item.Header>
          <Item.Header style={{wordWrap: 'break-word'}} className="white-text lato-font">Album: {this.props.album}</Item.Header>
          <Item.Header style={{wordWrap: 'break-word'}} className="white-text lato-font">Artist: {this.props.artist}</Item.Header>
        </Item.Content>
        <Button style={{marginTop:'7px'}} onClick={this.handleRemove} floated="right" size='mini' inverted color='orange'> Remove </Button>
        <Button style={{marginTop:'7px'}} onClick={this.handlePlay} floated="right" size='mini' inverted color='green'> Load </Button>
      </List.Item>
    )
  }
}

export default connect(null, { removeFromPlaylist, selectSong })(Song)
