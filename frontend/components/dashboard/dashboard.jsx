import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import DeckIndexContainer from '../deck/deck_index_container';
import DashboardSidebar from './dashboard_sidebar';

const Dashboard = (props) => {
  // debugger;
  return (
    <div>
      <DashboardSidebar logout={props.logout}/>
      <DeckIndexContainer />
    </div>
  )
};

export default Dashboard;