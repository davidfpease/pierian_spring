import * as CardUtil from '../util/cards_api_util';

export const RECEIVE_CARDS = 'RECEIVE_CARDS';
export const RECEIVE_CARD = 'RECEIVE_CARD';
export const REMOVE_CARD = 'REMOVE_CARD';

export const receiveCards = cards => {

  return {
    type: RECEIVE_CARDS,
    cards
  }
};

export const receiveCard = card => {

  return {
    type: RECEIVE_CARD,
    card
  }
};

export const removeCard = (cardId) => {

  return {
    type: REMOVE_CARD,
    cardId
  }
}

export const fetchAllCardsInDeck = (deck_id) => {
  return dispatch =>{
    return CardUtil.fetchAllCardsInDeck(deck_id).then(cards=>{
      return dispatch(receiveCards(cards))
    })
  }
};

export const fetchAllCards = () => {
  return dispatch =>{
    return CardUtil.fetchAllCards().then(cards=>{
      return dispatch(receiveCards(cards))
    })
  }
};

export const createCard = (card, deck_id) => {
  return dispatch => {
    return CardUtil.createCard(card, deck_id).then(card => {
      return dispatch(receiveCard(card))
    })
  }
};

export const updateCard = (card) => {
  return dispatch => {
    return CardUtil.updateCard(card).then(card => {
      return dispatch(receiveCard(card))
    })
  }
};

export const deleteCard = (cardId) => {
  return dispatch => {
    return CardUtil.deleteCard(cardId).then(()=>{
      dispatch(removeCard(cardId))
    })
  }
};
