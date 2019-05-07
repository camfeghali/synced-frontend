import React from 'react';
import { connect } from 'react-redux'
import { persistUser, goOffAir} from './Actions'
import { Route, Switch } from 'react-router-dom';
import Login from './Components/Login'
import Signup from './Components/Signup'
import Navbar from './Components/Navbar'
import CreateChannel from './Components/CreateChannel/CreateChannel'
import JoinChannel from './Components/JoinChannel/JoinChannel'
import './App.css';
import Particles from 'react-particles-js'


class App extends React.Component{
  // console.log("local storage is: ",localStorage)

  componentDidMount(){
    console.log("App refreshed!")
    this.props.persistUser()
    this.props.goOffAir(this.props.username)

  }

  componentWillUnmount(){
    this.props.goOffAir(this.props.username)
  }

  render(){
    let params={
      "particles": {
          "number": {
              "value": 100
          },
          "size": {
              "value": 3
          }
      },
      "interactivity": {
          "events": {
              "onhover": {
                  "enable": true,
                  "mode": "repulse"
              }
          }
      }
    }
    return (
      <div className="App">
      <Navbar/>
      <Particles params={params}/>
      <Switch>
      <Route path="/login" render={routerProps => (
        <Login />
      )}/>
      <Route path="/signup" render={routerProps => {
        return (
          <Signup/>
        );
      }}/>
      <Route path="/lobby" render={routerProps => (
        <JoinChannel />
      )}/>
      <Route path="/my_station" render={routerProps => (
        <CreateChannel />
      )}/>
      </Switch>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    state : state,
    username : state.user.username,
    station : state.station,
    media : state.media,
  }
}

export default connect(mapStateToProps, {persistUser, goOffAir})(App);
