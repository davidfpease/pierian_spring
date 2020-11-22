import React from 'react';
import { openModal } from '../../../actions/modal_actions';
import CardIndex from './card_index';
import { fetchAllCards, updateCard } from '../../../actions/card_actions';

import { connect } from 'react-redux';

const mstp = (state, ownProps) => {
  debugger;
  return {
    cards: Object.keys(state.entities.cards).map(key => state.entities.cards[key]),
  }
}

const mdtp = dispatch => {
  debugger;
  return {
    updateCard: (card) => dispatch(updateCard(card)),
    fetchAllCards: (deckId) => dispatch(fetchAllCards(deckId)),
    openModal: (modalType) => dispatch(openModal(modalType)),
  }
}

export default connect(mstp, mdtp)(CardIndex);