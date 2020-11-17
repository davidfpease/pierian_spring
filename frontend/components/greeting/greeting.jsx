import React from 'react';
import { Link } from 'react-router-dom';

//{ currentUser, logout }
const Greeting = (props) => {
  // debugger;
  const sessionLinks = () => (
    <nav className="nav-items">
      <div>
        <Link to="/signup">Make Flashcards</Link>
      </div>
      <div className="login-login">
        <Link to="/login">Log In</Link>
      </div>
      <div className="login-get-started">
        <Link to="/signup">Get Started</Link>
      </div>
    </nav>
  );
  const personalGreeting = () => {
  // debugger
  return (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {props.currentUser.first_name}!</h2>
      <button className="header-button" onClick={props.logout}>Log Out</button>
    </hgroup>
  );
};

  return props.currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;