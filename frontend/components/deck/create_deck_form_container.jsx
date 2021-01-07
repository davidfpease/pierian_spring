import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions';
import { createDeck } from '../../actions/deck_actions';
import CreateDeckForm from './create_deck_form';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.session,
    formType: 'createDeck',
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (deck) => dispatch(createDeck(deck)),
    closeModal: () => {
      dispatch(closeModal());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateDeckForm);