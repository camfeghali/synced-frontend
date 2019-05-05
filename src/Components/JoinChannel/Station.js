import React from 'react'
import monkeyAvatar from'./monkeyAvatar.png';
import { connect } from 'react-redux'
import { listenTo, connectToStation } from '../../Actions'
import { ActionCableConsumer } from 'react-actioncable-provider'
import { Image, List, Button, Item, Segment } from 'semantic-ui-react'

class Channel extends React.Component{

  state = {
    trackName: "",
    artist: "",
    trackUrl: "",
    playing: "",
    album: "",
    hostUsername: "",

  }

  handleClick = () =>{
    console.log("join is firing!")
    console.log("my props in station are: ", this.props)
    console.log("my station id is: ", this.props.station.id)
    // this.props.listenTo(this.props.station.id)
    this.props.connectToStation(this.props.station.id)
    // this.syncToStation()
  }

  handleReceived = (data) => {
    console.log("Handle receive in station component: ", data)
    this.setState({
      trackName: data.trackName,
      artist: data.artist,
      album: data.album,
    })
  }


  render(){
    console.log("What are my props in a Station :", this.props)
    return(
      <List.Item>
      <Segment textalign='left' style={{borderStyle: 'solid', borderColor:'purple', boxShadow: '0px 0px 2px 1px grey'}}>
      <ActionCableConsumer channel={{channel: 'StationChannel', station_id: this.props.station.id}} onReceived={(data) => {this.handleReceived(data)}}/>
        <Image avatar src={monkeyAvatar} />
        <Item.Content textalign='left'>
          <Item.Header as='a' textalign='left'>Station ID: {this.props.station.id}</Item.Header>
          <Item.Description >
            Listening to
              <b> - {this.state.trackName}  </b>
              <b> By: {this.state.artist} - </b>
              <b> Album: {this.state.album} - </b>
          </Item.Description>
          </Item.Content>
          <Button onClick={this.handleClick} inverted color='blue'>
            Join
          </Button>
          <Button  floated='right' inverted color='purple'>
            Add to Favs
          </Button>
          </Segment>
      </List.Item>
    )
  }
}
const mapStateToProps = (state) => {
  return{
    // listeningTo: state.listeningTo,
    // connectedTo: state.station.tunedTo.stationId,
    state: state
  }
}
export default connect(mapStateToProps, {connectToStation})(Channel)
