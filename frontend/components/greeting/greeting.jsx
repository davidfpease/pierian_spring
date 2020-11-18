import React from 'react';
import { Link } from 'react-router-dom';

//{ currentUser, logout }
const Greeting = (props) => {
  // debugger;
  const sessionLinks = () => (
    <div className="nav-bar">
      <div className="nav-bar-logo">
        <Link to='/'>
          <img id="logo" src={window.logo} />
        </Link>
      </div>
      <div className="nav-items">
        <ul className="nav-items-list">
          <li className="nav-bar-item nav-option">
              <button className="nav-bar-button" >Find Flashcards</button>
          </li>
          <li className="nav-bar-item nav-option">
              <button className="nav-bar-button" onClick={() => props.openModal('signup')}>Make Flashcards</button>
          </li>
          <li className="nav-bar-item nav-option">
              <button className="nav-bar-button" >Why It Works</button>
          </li>
          <li className="nav-bar-item nav-option">
              <button className="nav-bar-button" >More</button>
          </li>
        </ul>
        <ul className="nav-ctas">
          <li className="nav-bar-item">
            <div className="nav-cta">
              <button className="nav-bar-button" onClick={() => props.openModal('login')}>Log In</button>
            </div>
          </li>
          <li className="nav-bar-item">
            <div className="nav-cta nav-cta-login">
              <button className="get-started-button" onClick={() => props.openModal('signup')}>Get Started</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
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