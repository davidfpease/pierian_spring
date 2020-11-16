import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/session_api_util';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome</h1>, root);

  //TESTING
  window.login = APIUtil.login;
  window.signup = APIUtil.signup;
  window.logout = APIUtil.logout;


});
