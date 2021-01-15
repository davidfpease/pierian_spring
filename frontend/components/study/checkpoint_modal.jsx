import React from 'react';
import CircleProgress from './circle_progress';


export default function Checkpoint(props) {
  
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
        <div className="action-buttons">
          <div className="pill-button large-cta-button back-to-dashboard-button" label="Back to Dashboard">
            <span className="label">Back to Dashboard</span>
          </div>
          <div className="pill-button large-cta-button start-new-round pulse" label="Study 10 more Cards">
            <span className="label">Study 10 more Cards</span>
          </div>
        </div>
        <button onClick={props.closeModal}>Close</button>
      </div>
    </div>
  )
}
