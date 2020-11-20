import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const Dashboard = (props) => {
  //debugger;
  return (
    <div>
      <h1>
        Hello from the Dashboard component
      </h1>
      <button className="header-button" onClick={props.logout}>Log Out</button>
    </div>
  )
};

export default Dashboard;