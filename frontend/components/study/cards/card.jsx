import React from 'react';

const Card = props => {
  //debugger;
  let question = "null";
  if (props.card){
    question = props.card.question;
  }
  return (
    <div>
      <h4>Hello from a card component</h4>
      {
        props.revealAnswer === false ? (
          <div>
            <p>{question}</p>
            <button onClick={(e)=>props.clickReveal(e)}>Reveal Answer</button>
          </div>
        ) : (
          <div>
              <p>{props.card.answer}</p>
              <button onClick={(e)=>props.clickScore(e)}>Log Score</button>
            </div>
        )

      }
    </div>
  )
};

export default Card;