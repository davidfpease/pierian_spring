import { connect } from 'react-redux';
import Dashboard from './dashboard';
import {fetchAllDecks, 
        createDeck, 
        updateDeck, 
        deleteDeck } from '../../actions/deck_actions';
import { fetchAllCards } from '../../actions/card_actions';
import { logout } from '../../actions/session_actions';

const mstp = (state) => {
  return {
    decks: state.entities.decks,
    cards: state.entities.cards,
    currentUser: state.entities.users[state.session.id],
  }
}

const mdtp = dispatch => ({
  fetchAllDecks: ()=> dispatch(fetchAllDecks()),
  fetchAllCards: () => dispatch(fetchAllCards()),
  createDeck: (deck)=> dispatch(createDeck(deck)),
  updateDeck: (deck)=> dispatch(updateDeck(deck)),
  deleteDeck: (deckId)=> dispatch(deleteDeck(deckId)),
  logout: ()=> dispatch(logout()),
});

export default connect(mstp,mdtp)(Dashboard);