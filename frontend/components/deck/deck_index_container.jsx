import React from 'react';
import DeckIndex from './deck_index';
import { fetchAllDecks, 
        createDeck,
        updateDeck, 
        deleteDeck } from '../../actions/deck_actions';
import { openModal } from '../../actions/modal_actions';

import { connect } from 'react-redux';
import modal from '../modal/modal';

const mstp = (state, ownProps) => {
  // 
  return {
    decks: Object.keys(state.entities.decks).map(key=> state.entities.decks[key]),
    currentUser: state.entities.users[state.session.id],
    cards: state.entities.cards,

  }
}

const mdtp = (dispatch) => {
  // 
  return {
    fetchAllDecks: () => dispatch(fetchAllDecks()),
    createDeck: (deck) => dispatch(createDeck(deck)),
    updateDeck: (deck) => dispatch(updateDeck(deck)),
    deleteDeck: (deckId) => dispatch(deleteDeck(deckId)),
    openModal: (modal)  => dispatch(openModal(modal)),
  }
};

export default connect(mstp, mdtp)(DeckIndex);