import { connect } from 'react-redux';
import Deck from './deck';
import {fetchAllDecks, 
        createDeck, 
        updateDeck, 
        deleteDeck } from '../../actions/deck_actions';

const mstp = (state, ownProps) => {

  return {
    decks: state.entities.decks
  }
}

const mdtp = dispatch => ({
  fetchAllDecks: ()=> dispatch(fetchAllDecks()),
  createDeck: (deck)=> dispatch(createDeck(deck)),
  updateDeck: (deck)=> dispatch(updateDeck(deck)),
  deleteDeck: (deckId)=> dispatch(deleteDeck(deckId)),
});

export default connect(mstp,mdtp)(Deck);