import React from 'react';
import DeckIndex from './deck_index';
import { fetchAllDecks, 
        createDeck,
        updateDeck, 
        deleteDeck } from '../../actions/deck_actions';

import { connect } from 'react-redux';

const mstp = (state, ownProps) => {
  // debugger;
  return {
    decks: Object.keys(state.entities.decks).map(key=> state.entities.decks[key]),
  }
}

const mdtp = (dispatch) => {
  // debugger;
  return {
    fetchAllDecks: () => dispatch(fetchAllDecks()),
    createDeck: (deck) => dispatch(createDeck(deck)),
    updateDeck: (deck) => dispatch(updateDeck(deck)),
    deleteDeck: (deckId) => dispatch(deleteDeck(deckId)),
  }
};

export default connect(mstp, mdtp)(DeckIndex);