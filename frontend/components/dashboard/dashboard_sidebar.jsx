import React from 'react';
import ProfileContainer from './profile_container';
import OtherDecks from './other_decks';

const DashboardSidebar = (props = {}) => {
  let decks = [];
  
  // Pass forward only the decks which were NOT created by the current user
  Object.keys(props.decks).forEach(key => {
    if (props.decks[key].creator_id !== props.currentUser.id){
      decks.push(props.decks[key]);
    };
  });

  return (
    <div className="dashboard-sidebar">
      <ProfileContainer currentUser={props.currentUser}/>
      <OtherDecks decks={decks} />


    </div>
  )

}

export default DashboardSidebar;