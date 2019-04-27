import React from 'react'
import { connect } from 'react-redux'
// import { setUrl } from '../Actions'
import { Container, Image, Menu } from 'semantic-ui-react';
import logo from'./logo1.png';


class Navbar extends React.Component{
  render(){
    console.log("what are my props in Navbar?", this.props)
    return(
      <div>
        <Menu style={{borderStyle:'solid', borderBottomColor:'#757575'}}>
          <Container >
            <Menu.Item as="a" header>
              <Image
                size="small"
                src={logo}
                style={{width: 50, height: 50}}
              />
            </Menu.Item>
            <Menu.Item as="a" name="username" >
              {this.props.user ? this.props.user.username : " "}
            </Menu.Item>
            <Menu.Menu position="right">
            <Menu.Item as="a" name="lobby" href="/lobby">
              Lobby
            </Menu.Item>
            <Menu.Item as="a" name="my_station" href="/my_station">
              My Station
            </Menu.Item>
            <Menu.Item as="a" name="login" href="/login">
              Login
            </Menu.Item>
            <Menu.Item as="a" name="register" href="/signup">
              Signup
            </Menu.Item>
            <Menu.Item as="a" name="register" href="/signup">
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
    user: state.user
  }
}

export default connect(mapStateToProps)(Navbar)
