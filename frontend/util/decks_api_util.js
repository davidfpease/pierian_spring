export const fetchAllDecks = () => {

  return $.ajax({
    method: 'GET',
    url: `/api/decks`,
  })
};

export const createDeck = (deck) => {
  //
  return $.ajax({
    method: 'POST',
    url: `/api/decks`,
    data: { deck },
  })
}

export const updateDeck = (deck) => {
  let newDeck = {title: deck.title,
    objective: deck.objective,
    mastery: deck.mastery };
    
  // 
  return $.ajax({
    method: 'PATCH',
    url: `/api/decks/${deck.id}`,
    data: { deck: newDeck },
  })
}

export const deleteDeck = (deck_id) => {

  return $.ajax({
    method: 'DELETE',
    url: `/api/decks/${deck_id}`,
  })
};