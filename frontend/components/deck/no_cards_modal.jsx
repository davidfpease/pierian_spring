import React from 'react';

export default function NoCardsModal(props) {
  return (
    <div>
      <div className="new-modal-body">
        <div className="close-x" onClick={props.closeModal}>
          <img src="http://localhost:3000/assets/close-outline-db3fcdd21c62170ac1beaafbb0dc9f5a53d629d4095a8284b2d30fb1431af6d7.svg" />
        </div>
        <div className="new-modal-content">
          <div className="new-modal-title">This Deck Has No Cards</div>
          <p className="new-modal-message">Before you can study this deck, you must add cards to this deck.</p>
          <div className="new-modal-actions">
            <div onClick={props.closeModal} className="pill-button resolve-modal-button" label="Ok">
              <span className="label">Ok</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

