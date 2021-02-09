import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions';
import { createDeck } from '../../actions/deck_actions';
import CreateDeckForm from './create_deck_form';
import { fetchAllDecks } from '../../actions/deck_actions';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    formType: 'createDeck',
    currentUserId: state.session.id,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (deck) => dispatch(createDeck(deck)),
    closeModal: () => {
      dispatch(closeModal());
    },
    fetchAllDecks: () => dispatch(fetchAllDecks()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateDeckForm);