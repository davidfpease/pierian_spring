import React from 'react';
import { Link } from 'react-router-dom';

//{ currentUser, logout }
const Greeting = (props) => {
  // debugger;
  const sessionLinks = () => (
    <nav className="login-signup">
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign up!</Link>
    </nav>
  );
  const personalGreeting = () => {
  // debugger
  return (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {props.currentUser.username}!</h2>
      <button className="header-button" onClick={props.logout}>Log Out</button>
    </hgroup>
  );
};

  return props.currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;