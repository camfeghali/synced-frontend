import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui/dist/semantic.min.css';
import { ActionCableProvider } from 'react-actioncable-provider'
import configureStore from './configureStore';

// const store = createStore(myReducer, applyMiddleware(reduxThunk))
const combinedStore = configureStore()

ReactDOM.render(
  <ActionCableProvider url='ws://localhost:3000/cable'>
    <Provider store={combinedStore}>
      <Router>
        <App />
      </Router>
    </Provider>
  </ActionCableProvider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
