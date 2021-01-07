import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import DeckIndexContainer from '../deck/deck_index_container';
import DashboardSidebar from './dashboard_sidebar';

class Dashboard extends React.Component {
  // 
  componentDidMount(){
    this.props.fetchAllCards();
    this.props.fetchAllDecks();
  }


  render(){
    return (
      <div className="dashboard">
        <DashboardSidebar />
        <DeckIndexContainer />
      </div>
    )
    };
};

export default Dashboard;