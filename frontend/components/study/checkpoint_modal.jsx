import React from 'react';
import CircleProgress from './circle_progress';
import {
  Link
} from "react-router-dom";


export default function Checkpoint(props) {

  const studyMore = ()=>{
    props.closeModal;
    window.location.reload();
  }

  return (
    <div className="checkpoint-background">
      <div className="checkpoint-container">
        <div className="checkpoint-title-container">
          <h2 className="checkpoint-title">Checkpoint!</h2> 
        </div> 
        <div className="study-mix-metadata">
          <div className="mastery-circles">
            <CircleProgress mastery={props.mastery} originalCards={props.originalCards}/>
          </div>

        </div> 
        <div className="time-left">
          <div className="fullscreen-checkpoint">Keep Going! You'll be learning faster before long!</div>
        </div>
        <div className="circle-action-buttons">
          <Link to={'/dashboard'} style={{ textDecoration: 'none' }} onClick={props.closeModal}>
            <div className="circle-pill-button" label="Back to Dashboard">
              <span className="label">Back to Dashboard</span>
            </div>
          </Link>
          
            <div className="circle-pill-button" label="Study 10 more Cards" onClick={studyMore}>
              <span className="label">Study 10 more Cards</span>
            </div>
          
        </div>
      </div>
    </div>
  )
}
