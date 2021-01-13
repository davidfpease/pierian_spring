import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { receiveErrors } from '../../actions/session_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import CreateDeckFormContainer from '../deck/create_deck_form_container';
import NoCardsModal from '../deck/no_cards_modal';
import Checkpoint from '../study/checkpoint_modal';

function Modal({ modal, closeModal, decks }) {
  
  if (!modal) {
    return null;
  }
  let component;
  switch (modal.modal) {
    case 'login':
      component = <LoginFormContainer />;
        break;
    case 'signup':
      component = <SignupFormContainer />;
      break;
    case 'createDeck':
      component = <CreateDeckFormContainer />
      break;
    // case 'noCards':
    //   component = <NoCardsModal closeModal={closeModal}/>
    //   break;
    case 'checkpoint':
      debugger;
      component = <Checkpoint mastery={decks[modal.package.deckId].mastery} closeModal={closeModal}/>
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  //
  return {
    modal: state.ui.modal,
    decks: state.entities.decks,
    
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => {
      dispatch(closeModal());
      dispatch(receiveErrors([]));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);