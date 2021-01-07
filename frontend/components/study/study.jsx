import React from 'react';
import CardIndexContainer from './cards/cards_container';
import StudySideBar from './study_sidebar.jsx';

const Study = (props) => {
  //
  return (
    <div className="study">
      
      <StudySideBar />   
      
      <CardIndexContainer deckId={props.match.params.deck_id}/>  




    </div>
  )
}

export default Study;
