import React from 'react';
import { Link } from 'react-router-dom';

//{ currentUser, logout }
const Greeting = (props) => {
  // debugger;
  const sessionLinks = () => (
    <nav className="nav-items">
      <div>
        <button onClick={() => props.openModal('signup')}>Make Flashcards</button>
      </div>
      <div className="login-login">
        <button onClick={() => props.openModal('login')}>Log In</button>
      </div>
      <div className="login-get-started">
        <button onClick={() => props.openModal('signup')}>Get Started</button>
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

  return (
    props.currentUser ? personalGreeting(props.currentUser, props.logout) : 
    sessionLinks()
  );
};


export default Greeting;