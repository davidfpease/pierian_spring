import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import Banner from './banner';

//{ currentUser, logout }
const Greeting = (props) => {
  // 
  const sessionLinks = () => (
    <div>
    <div className="background-image">
      <img id="logo" src={window.image_5} />
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
                <button className="nav-bar-button" 
                  onClick={() => props.openModal({modal: 'signup'})}>
                  Make Flashcards
                </button>
            </li>
            <li className="nav-bar-item nav-option">
                <button className="nav-bar-button" >Why It Works</button>
            </li>
            <li className="nav-bar-item nav-option">
                <button className="nav-bar-button" >More..</button>
            </li>
          </ul>
          <ul className="nav-ctas">
            <li className="login-button">
                <div onClick={() => props.openModal({ modal: 'login' })} className="nav-cta">
                <button className="nav-bar-button" 
                  >Log In</button>
              </div>
            </li>
            <li className="nav-bar-item sign-up">
                <div onClick={() => props.openModal({ modal: 'signup' })} className="nav-cta nav-cta-login">
                <button className="get-started-button" 
                  >Get Started</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
      </div>
      <Banner openModal={props.openModal}/>
      <div className="about-footer">
        <h1 onClick={()=>props.openModal({modal: "about"})}>About this site</h1>
      </div>
    </div>
  );

  const personalGreeting = () => {
  // 
  return (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {props.currentUser.first_name}!</h2>
      <button className="header-button" onClick={props.logout}>Log Out</button>
    </hgroup>
    );
  };

  return (
    props.currentUser ? <Redirect to="/dashboard" /> :
      sessionLinks()
  );
};


export default Greeting;