import React from 'react';
import EditCardsForm from './edit_cards_form';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';
import { updateCard, fetchAllCardsInDeck, deleteCard, createCard} from '../../actions/card_actions'

const mstp = (state, ownProps) => {
  //debugger;
  return {
    //might not even need this......
    cards: state.entities.cards,
    deck: state.entities.decks[ownProps.match.params.deck_id]
  }
}

const mdtp = dispatch => {
  return {
    updateCard: (card) => dispatch(updateCard(card)),
    fetchAllCardsInDeck: (deckId) => dispatch(fetchAllCardsInDeck(deckId)),
    openModal: (modalType) => dispatch(openModal(modalType)),
    deleteCard: (cardId)  => dispatch(deleteCard(cardId)),
    createCard: (card, deckId) => dispatch(createCard(card, deckId)),
    logout: () => dispatch(logout()),
  }
}

export default connect(mstp, mdtp)(EditCardsForm);
