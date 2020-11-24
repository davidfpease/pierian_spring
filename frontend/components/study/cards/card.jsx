import React from 'react';
import { IoMdCreate } from 'react-icons/io';


const Card = props => {
  //debugger;
  let question = "null";
  if (props.card){
    question = props.card.question;
  }
  return (
    <div className="card">
      
      {
        props.revealAnswer === false ? (
          <div className="card-question">
            <div className="card-question-text">
              <div className="card-face-header">
                <div className="q-icon">Q</div>
                <div className="question-edit-icon"><IoMdCreate /></div>
              </div>
              <div className="question-text">
                <p>{question}</p>
              </div>
            </div>
              <div className="reveal-button" onClick={(e)=>props.clickReveal(e)}>
                Reveal Answer
              </div>
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