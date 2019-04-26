import React from 'react'
import monkeyAvatar from'./monkeyAvatar.png';
import { connect } from 'react-redux'
import { listenTo } from '../../Actions'
import { Image, List, Button, Item, Segment } from 'semantic-ui-react'

class Channel extends React.Component{

  handleClick = () =>{
    this.props.listenTo(this.props.station.id)
  }

  joinChannel = () => {
    console.log("join channel!: ",this.state.listeningTo)
    let url = `http://localhost:3000/stations/${this.state.stationId}`
    console.log("the url i'm hitting is: ", url)
    let data = this.props.station.id
    let config = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }
    fetch(url, config)
  }

  render(){

    return(
      <List.Item>
      <Segment textalign='left' style={{borderStyle: 'solid', borderColor:'purple', boxShadow: '0px 0px 2px 1px grey'}}>
        <Image avatar src={monkeyAvatar} />
        <Item.Content textalign='left'>
          <Item.Header as='a' textalign='left'>Station ID: {this.props.station.id}</Item.Header>
          <Item.Description >
            Listening to {this.props.station.song_id}
              <b> - {this.props.station.name} - </b>
            {this.props.station.timestamp} .
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
    listeningTo: state.listeningTo
  }
}
export default connect(mapStateToProps,{listenTo})(Channel)
