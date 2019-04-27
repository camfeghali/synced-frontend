import { createStore, applyMiddleware } from 'redux';
import reducer from './Reducers';
import reduxThunk from 'redux-thunk'

const configureStore = () => {
  // right now there's not too much additional set up we are doing
  // but there could be in the future
  return createStore(reducer, applyMiddleware(reduxThunk));
  // return createStore(reducer);
};

export default configureStore;
