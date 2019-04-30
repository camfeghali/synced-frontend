import React from 'react';
import { connect } from 'react-redux'
import { persistUser} from './Actions'
import { Route, Switch } from 'react-router-dom';
import Login from './Components/Login'
import Signup from './Components/Signup'
import Navbar from './Components/Navbar'
import CreateChannel from './Components/CreateChannel/CreateChannel'
import JoinChannel from './Components/JoinChannel/JoinChannel'
import './App.css';

class App extends React.Component{
  // console.log("local storage is: ",localStorage)

  componentDidMount(){
    console.log("App refreshed!")
    this.props.persistUser()
  }

  render(){
    console.log("Props in App component: ", this.props)
    return (
      <div className="App">
      <Navbar/>
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
    user : state.user,
    station : state.station,
    media : state.media,
  }
}

export default connect(null, {persistUser})(App);
