export const fetchAllCardsInDeck = (deck_id) => {

  return $.ajax({
    method: 'GET',
    url: `/api/decks/${deck_id}/cards`,
  })
};

export const fetchAllCards = () => {

  return $.ajax({
    method: 'GET',
    url: `/api/cards`,
  })
};

export const createCard = (card, deck_id) => {
  //debugger;
  return $.ajax({
    method: 'POST',
    url: `/api/decks/${deck_id}/cards`,
    data: {card} ,
  })
}

export const updateCard = (card) => {
  // debugger
  return $.ajax({
    method: 'PATCH',
    url: `/api/cards/${card.id}`,
    data: { card },
  })
};

export const deleteCard = (card_id) => {

  return $.ajax({
    method: 'DELETE',
    url: `/api/cards/${card_id}`,
  })
};