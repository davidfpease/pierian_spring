import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '../modal/modal';

const DeckItem = ({ deck, editDeck, deleteDeck, openModal}) => {
  
  return (
    <li>

      <Link to={`/study/${deck.id}`}><h3>{deck.title}</h3></Link>
      <button onClick={()=>deleteDeck(deck.id)}>Delete Deck</button>
      <button onClick={() => openModal('editDeck')}>Edit Deck</button>
    </li>
  )
};

export default DeckItem;