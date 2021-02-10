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
  debugger;
  let newDeck = {title: deck.title,
    objective: deck.objective,
    mastery: deck.mastery,
    creator_id: deck.creator_id };
    
  // 
  return $.ajax({
    method: 'PATCH',
    url: `/api/decks/${deck.id}`,
    data: { deck: newDeck },
  })
}

export const copyDeck = (deck, cards) => {
  let newDeck = {title: deck.title,
    objective: deck.objective,
    mastery: 0 };
  
  // 
  return $.ajax({
    method: 'POST',
    url: `/api/copy_deck`,
    data: { deck: newDeck,
            cards: cards },
  })
}

export const deleteDeck = (deck_id) => {

  return $.ajax({
    method: 'DELETE',
    url: `/api/decks/${deck_id}`,
  })
};