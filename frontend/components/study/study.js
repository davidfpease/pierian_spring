import React from 'react';
import CardIndexContainer from './cards/cards_container';

const Study = (props) => {
  //debugger;
  return (
    <div>
      <p>hello from the study component</p>
      <CardIndexContainer deckId={props.match.params.deck_id}/>      




    </div>
  )
}

export default Study;
