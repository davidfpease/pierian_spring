import React from 'react';
import ProfileContainer from './profile_container';
import OtherDecks from './other_decks';

const DashboardSidebar = (props = {}) => {
  let decks = [];
  
  //extract deckId from each card and tally cards for each deck
  
  let deckIds = Object.keys(props.cards).map(cardId => {
    return (props.cards[cardId].deck_id )
  })
  
  
  // Pass forward only the decks which were NOT created by the current user
  Object.keys(props.decks).forEach(key => {
    if (props.decks[key].creator_id !== props.currentUser.id){
      decks.push([props.decks[key], 
        deckIds.filter(id => id.toString() === key).length
      ]);
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