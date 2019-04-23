import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Login from './Components/Login'
import Signup from './Components/Signup'
import Navbar from './Components/Navbar'
import CreateChannel from './Components/CreateChannel/CreateChannel'
import JoinChannel from './Components/JoinChannel/JoinChannel'
import './App.css';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Switch>
      <Route path="/login" render={routerProps => (
          <Login />
        )}/>
      <Route path="/signup" render={routerProps => {
          console.log("routerProps", routerProps);
          return (
            <Signup/>
          );
        }}/>
        <Route path="/join" render={routerProps => (
            <JoinChannel />
          )}/>
        <Route path="/create" render={routerProps => (
            <CreateChannel />
          )}/>
    </Switch>
    </div>
  );
}

export default App;
