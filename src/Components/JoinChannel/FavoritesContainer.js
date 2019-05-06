import React from 'react'
import User from './User'
import { connect } from 'react-redux'
import { ActionCableConsumer } from 'react-actioncable-provider'
import { addOnlineUser, getOnlineUsers, removeOfflineUser } from '../../Actions'
import { Segment, List, Container } from 'semantic-ui-react'


class FavoritesContainer extends React.Component{

  handleReceived = (data) => {
    if(data.offline === true){
      console.log("HAHAHAHAHA Data is: ", data)
      this.props.removeOfflineUser(data.user.username)
    } else{
      this.props.addOnlineUser (data.user)
      console.log("Data received: ", data)
    }
  }

  componentDidMount(){
    this.props.getOnlineUsers()
    console.log("Firing on Component did mount: ", this.props.username)
  }

  getFollowees = () => {
    console.log("getFollowees function firing!")
    console.log("this.props.username is: !", this.props.username)
    return this.props.username ? this.props.getFollowees(this.props.username) : null
  }

  render(){
    console.log("In Favorites Container My props are: ", this.props)
    let onlineUsers = this.props.onlineUsers
    .filter(user => user.username !== this.props.username)
    .map(user => <User username={user.username}/>)

    let followees = this.props.followees
    .map(user => <User username={user.username}/>)

    return(
      <Segment style={{borderStyle: 'solid', borderColor:'purple', boxShadow: '0px 0px 2px 1px grey'}}>
      <ActionCableConsumer channel={{channel: 'OnlineUserChannel', user: "dude"}} onReceived={(data) => {this.handleReceived(data)}}/>
      <Segment style={{borderStyle: 'solid', borderColor:'purple', boxShadow: '0px 0px 2px 1px grey'}}>
        <div>
          <Container textAlign='left'>
            <h1> Favorites </h1>
          </Container>
        </div>
      </Segment>
      <List divided relaxed>
        {followees}
      </List>
      <Segment style={{borderStyle: 'solid', borderColor:'purple', boxShadow: '0px 0px 2px 1px grey'}}>
        <div>
          <Container textAlign='left'>
            <h1> Online </h1>
          </Container>
        </div>
      </Segment>
      <List divided relaxed>
        {onlineUsers}
      </List>
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    state: state,
    username: state.user.username,
    onlineUsers: state.user.onlineUsers,
    followees: state.user.followees
  }
}

export default connect(mapStateToProps, {addOnlineUser, getOnlineUsers, removeOfflineUser})(FavoritesContainer)
