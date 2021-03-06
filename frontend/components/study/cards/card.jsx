import React from 'react';
import { IoMdCreate } from 'react-icons/io';


const Card = props => {
  //
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
              <div className="placeholder">o</div>
              <div className="reveal-button" onClick={(e)=>props.clickReveal(e)}>
                Reveal Answer
              </div>
          </div>
        ) : (
          <div className="card-question">
              <div className="card-question-text">
                <div className="card-face-header">
                  <div className="q-icon">A</div>
                  <div className="question-edit-icon"><IoMdCreate /></div>
                </div>
                <div className="question-text">
                  <p>{props.card.answer}</p>
                </div>
              </div>
              <div className="how-well">How well do you know this?</div>
              <div className="scores" >
                <ul>
                  <li onClick={(e)=>props.clickScore(e)} id="1">1<div className="small"><small>Not At All</small></div></li>
                  <li onClick={(e)=>props.clickScore(e)} id="2">2</li>
                  <li onClick={(e)=>props.clickScore(e)} id="3">3</li>
                  <li onClick={(e)=>props.clickScore(e)} id="4">4</li>
                  <li onClick={(e)=>props.clickScore(e)} id="5">5<div className="small"><small>Perfectly</small></div></li>
                </ul>
              </div>
            </div>
        )

      }
    </div>
  )
};

export default Card;