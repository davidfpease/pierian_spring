import { RECEIVE_DECKS, RECEIVE_DECK, REMOVE_DECK } from '../actions/deck_actions';

const decksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_DECKS:
      return action.decks;
    case RECEIVE_DECK:
      
      return Object.assign({}, state, { [action.deck.id]: action.deck });
    case REMOVE_DECK:
      let nextState = Object.assign({}, state);
      delete nextState[action.deckId]
      return nextState;
    default:
      return state;
  }
}

export default decksReducer;