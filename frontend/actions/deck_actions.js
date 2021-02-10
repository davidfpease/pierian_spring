import * as DeckUtil from '../util/decks_api_util';

export const RECEIVE_DECK = 'RECEIVE_DECK';
export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const REMOVE_DECK = 'REMOVE_DECK';


export const receiveDecks = decks => {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
};

export const receiveDeck = deck => {
  return {
    type: RECEIVE_DECK,
    deck,
  }
};

export const removeDeck = deckId => {
  return {
    type: REMOVE_DECK,
    deckId
  }
};

export const fetchAllDecks = () => {
  return dispatch => {
    return DeckUtil.fetchAllDecks().then(decks=>{
      return dispatch(receiveDecks(decks))
    })
  }
};

export const createDeck = (deck) => {
  return dispatch => {
    return DeckUtil.createDeck(deck).then(deck=>{
      return dispatch(receiveDeck(deck))  
    })
  }
};

export const updateDeck = (deck) => {
  return dispatch => {
    debugger;
    return DeckUtil.updateDeck(deck).then(deck=>{
      debugger;
      return dispatch(receiveDeck(deck))
    })
  }
};

export const deleteDeck = (deckId) => {
  return dispatch => {
    return DeckUtil.deleteDeck(deckId).then(()=>{
      return dispatch(removeDeck(deckId))
    })
  }
};

