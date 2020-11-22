import React from 'react';
import EditDeckContainer from './edit_deck_container';

const DeckEditModal = (props)=> {
  debugger;
  if (props.display === false) {
    return null;
  }

  return(
    <div className="modal-background">
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        <EditDeckContainer deck={props.deck} closeModal={props.closeModal}/>
      </div>
    </div>
  )

}

export default DeckEditModal;