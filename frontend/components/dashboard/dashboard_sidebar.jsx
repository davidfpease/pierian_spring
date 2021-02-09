import React from 'react';
import ProfileContainer from './profile_container';
import OtherDecks from './other_decks';

const DashboardSidebar = (props) => {
  return (
    <div className="dashboard-sidebar">
      <ProfileContainer />
      <OtherDecks decks={props.decks}/>


    </div>
  )

}

export default DashboardSidebar;