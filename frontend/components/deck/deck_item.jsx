import React from 'react';
import { Link } from 'react-router-dom';
import DeckEditModal from './deck_edit_modal';

class DeckItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      displayModal: false,
    }
    this.displayModal = this.displayModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  displayModal(e){
    e.stopPropagation();
    this.setState({displayModal: true});
  }

  closeModal(){
    this.setState({displayModal: false});
  }

  // { deck, editDeck, deleteDeck, openModal } = this.props;
  render(){
    let deck = this.props.deck;
    return (
      <li>
        <DeckEditModal deck={deck} display={this.state.displayModal} />
        <Link to={`/study/${deck.id}`}><h3>{deck.title}</h3></Link>
        <button onClick={()=>deleteDeck(deck.id)}>Delete Deck</button>
        <button onClick={(e)=> this.displayModal(e)}>Edit Deck</button>
      </li>
    )
  }
};

export default DeckItem;