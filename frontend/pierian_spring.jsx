import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/session_api_util';
import * as thunkActions from './actions/session_actions';
import configureStore from './store/store';
import Root from './components/root';
import thunk from 'redux-thunk';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);

  //TESTING
  
  window.login = thunkActions.login;
  window.signup = APIUtil.signup;
  window.logout = APIUtil.logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;

});
