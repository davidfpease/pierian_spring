import React from 'react';
import { Link } from 'react-router-dom';

const DeckItem = ({ deck, editDeck, deleteDeck}) => {

  return (
    <li >
      <Link to={`/study/${deck.id}`}><h3>{deck.title}</h3></Link>
      <button onClick={()=>deleteDeck(deck.id)}>Delete Deck</button>
      <button onClick={()=>editDeck(deck)}>Edit Deck</button>
    </li>
  )
};

export default DeckItem;