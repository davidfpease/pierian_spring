import React from 'react';

const Card = props => {
  debugger;
  let question = "null";
  if (props.card){
    question = props.card.question;
  }
  return (
    <div>
      <h4>Hello from a card component</h4>
      <p>{question}</p>
    </div>
  )
};

export default Card;