import React from 'react'
import { connect } from 'react-redux'
import { logOut } from '../Actions'
import { withRouter } from "react-router-dom";
import { Container, Image, Menu } from 'semantic-ui-react';
import logo from'./logo1.png';


class Navbar extends React.Component{

  directToLobby = () => {
    this.props.history.push("/lobby")
  }

  directToStation = () => {
    this.props.history.push("/my_station")
  }

  directToLogout = () => {
    this.props.logOut(this.props.username)
    this.props.history.push("/login")
  }

  directToLogin = () => {
    this.props.history.push("/login")
  }

  directToLoginFromLogoutButton = () => {
    this.props.history.push("/login")
  }



  render(){
    return(
      <div>
        <Menu style={{borderStyle:'solid', background:'transparent', borderBottomColor:'rgb(255, 255, 255)'}}>
          <Container >
            <Menu.Item as="a" header >
              <Image
                size="small"
                src={logo}
                style={{width: 50, height: 50}}
              />
            </Menu.Item>
            <Menu.Item as="a" name="username" className="navbar-text">
              {this.props.username ? this.props.username : " "}
            </Menu.Item>
            <Menu.Menu position="right">
            <Menu.Item as="a" name="lobby" className="navbar-text" onClick={this.directToLobby}>
              Lobby
            </Menu.Item>
            <Menu.Item className="navbar-text" as="a" name="my_station" onClick={this.directToStation}>
              My Station
            </Menu.Item>
            <Menu.Item className="navbar-text" as="a" name="login" onClick={this.directToLogin}>
              Login/Signup
            </Menu.Item>
            <Menu.Item className="navbar-text" onClick={this.directToLogout} as="a" name="register">
              Logout
            </Menu.Item>
          </Menu.Menu>
      </Container>
    </Menu>
  </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    // state: state,
    username: state.user.username
  }
}

export default withRouter(connect(mapStateToProps, { logOut })(Navbar))
