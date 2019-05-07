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
  }

  render(){
    console.log("My props are: ", this.props)
    let onlineUsers = this.props.onlineUsers
    .filter(user => user.username !== this.props.username)
    .map(user => <User username={user.username}/>)
    return(
      <Segment style={{background: 'transparent'}}>
      <ActionCableConsumer channel={{channel: 'OnlineUserChannel', user: "dude"}} onReceived={(data) => {this.handleReceived(data)}}/>
      <Segment style={{background: 'transparent'}}>
        <div>
          <Container textAlign='left'>
            <h1 className='playlist-style white-text fjalla-font'> Who's online </h1>
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
    username: state.user.username,
    onlineUsers: state.user.onlineUsers,
  }
}

export default connect(mapStateToProps, {addOnlineUser, getOnlineUsers, removeOfflineUser})(FavoritesContainer)
