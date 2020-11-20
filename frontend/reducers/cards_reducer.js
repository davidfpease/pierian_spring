import { RECEIVE_CARDS, RECEIVE_CARD, REMOVE_CARD} from '../actions/card_actions';

const cardsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CARDS:
      return action.cards;
    case RECEIVE_CARD:
      // const newCard 
      return Object.assign({}, state, {[action.card.id]: action.card});
    case REMOVE_CARD:
      let nextState = Object.assign({}, state);
      delete nextState[action.cardId]
      return nextState;  
    default:
      return state;
  }
}

export default cardsReducer;