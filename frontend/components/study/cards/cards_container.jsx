import React from 'react';
import { openModal } from '../../../actions/modal_actions';
import CardIndex from './card_index';
import { fetchAllCardsInDeck, updateCard } from '../../../actions/card_actions';
import { addScore } from '../../../actions/progressBar_actions';

import { connect } from 'react-redux';

const mstp = (state, ownProps) => {
  // 
 
  return {
    cards: Object.keys(state.entities.cards).map(key => state.entities.cards[key]),
    deckId: ownProps.deckId,
  }
}

const mdtp = dispatch => {
  // 
  return {
    receiveScore: score => dispatch(addScore(score)),
    updateCard: (card) => dispatch(updateCard(card)),
    fetchAllCardsInDeck: (deckId) => dispatch(fetchAllCardsInDeck(deckId)),
    openModal: (modalType) => dispatch(openModal(modalType)),
  }
}

export default connect(mstp, mdtp)(CardIndex);