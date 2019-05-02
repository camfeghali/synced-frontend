import React from 'react'
import User from './User'
import { connect } from 'react-redux'
import { ActionCableConsumer } from 'react-actioncable-provider'
import { addOnlineUser, getOnlineUsers } from '../../Actions'
import { Segment, List, Container } from 'semantic-ui-react'


class FavoritesContainer extends React.Component{

  handleReceived = (data) => {
    this.props.addOnlineUser (data.user)
    console.log("Data received: ", data)
  }

  componentDidMount(){
    this.props.getOnlineUsers()
  }

  render(){
    console.log("My props are: ", this.props)
    let onlineUsers = this.props.onlineUsers.map(user => <User username={user.username}/>)
    return(
      <Segment style={{borderStyle: 'solid', borderColor:'purple', boxShadow: '0px 0px 2px 1px grey'}}>
      <ActionCableConsumer channel={{channel: 'OnlineUserChannel', user: "dude"}} onReceived={(data) => {this.handleReceived(data)}}/>
      <Segment style={{borderStyle: 'solid', borderColor:'purple', boxShadow: '0px 0px 2px 1px grey'}}>
        <div>
          <Container textAlign='left'>
            <h1> Favorites... </h1>
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
  return {onlineUsers: state.user.onlineUsers}
}

export default connect(mapStateToProps, {addOnlineUser, getOnlineUsers})(FavoritesContainer)
