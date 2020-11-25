import React from 'react';
import {
  IoMdRadioButtonOff, IoIosGlasses,
  IoMdCreate, IoIosMore, IoMdClose
} from 'react-icons/io';

const CardHeader = (props) => {

  let deck = props.deck || {title:""};

  return (
    <div className="card-header">
      <div className="card-and-table-header">
        <div>
          <span className="deck-label">Deck:</span>
          <span className="header-deck-name">{deck.title}</span>
          <span className="deck-label">Total Cards:</span>
          <span className="card-number header-deck-name">{props.numCards}</span>
        </div>
        <span className="see-all-cards">
          <span className="glasses"> <IoIosGlasses /> </span>
           See all Cards in this Deck
        </span>
      </div>
    </div>
  )
}

export default CardHeader;