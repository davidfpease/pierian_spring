import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import DeckIndexContainer from '../deck/deck_index_container';

const Dashboard = (props) => {
  // debugger;
  return (
    <div>
      <h1>
        Hello from the Dashboard component
      </h1>
      <button className="header-button" onClick={props.logout}>Log Out</button>
      <DeckIndexContainer />
    </div>
  )
};

export default Dashboard;