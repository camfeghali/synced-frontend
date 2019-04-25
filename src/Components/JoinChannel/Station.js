import React from 'react'
import monkeyAvatar from'./monkeyAvatar.png';
import { connect } from 'react-redux'
import { listenTo } from '../../Actions'
import { Image, List, Button, Item, Segment } from 'semantic-ui-react'

class Channel extends React.Component{

  handleClick = () =>{
    this.props.listenTo(this.props.station.id)
  }

  render(){

    return(
      <List.Item>
      <Segment textalign='left' style={{borderStyle: 'solid', borderColor:'purple', boxShadow: '0px 0px 2px 1px grey'}}>
        <Image avatar src={monkeyAvatar} />
        <Item.Content textalign='left'>
          <Item.Header as='a' textalign='left'>Host ID: {this.props.station.host_id}</Item.Header>
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
