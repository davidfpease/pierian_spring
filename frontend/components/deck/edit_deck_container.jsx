import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions';
import EditDeckForm from './edit_deck_form';
import { updateDeck } from '../../actions/deck_actions';

const mstp = (state, ownProps) => {
  
  return {
    errors: state.errors.session,
    deck: ownProps.deck,
    closeModal: ownProps.closeModal,
  }
};

const mdtp = dispatch => {
  return {
    updateDeck: (deck) => dispatch(updateDeck(deck)),
    //closeModal: () => dispatch(closeModal()),
  }
};

export default connect(mstp, mdtp)(EditDeckForm);