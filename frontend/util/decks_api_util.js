export const fetchAllDecks = () => {

  return $.ajax({
    method: 'GET',
    url: `/api/decks`,
  })
};

export const createDeck = (deck) => {
  //debugger;
  return $.ajax({
    method: 'POST',
    url: `/api/decks`,
    data: { deck },
  })
}

export const updateDeck = (deck) => {
  //debugger;
  return $.ajax({
    method: 'PATCH',
    url: `/api/decks/${deck.id}`,
    data: { deck },
  })
}

export const deleteDeck = (deck_id) => {

  return $.ajax({
    method: 'DELETE',
    url: `/api/decks/${deck_id}`,
  })
};