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
    case 'checkpoint':
      return(
        <div className="modal-background">
          <div className="modal-child" onClick={e => e.stopPropagation()}>
            <Checkpoint mastery={modal.package.mastery} closeModal={closeModal}/>
          </div>
        </div>
      )
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