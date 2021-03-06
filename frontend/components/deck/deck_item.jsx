import React from 'react';
import { Link } from 'react-router-dom';
import DeckEditModal from './deck_edit_modal';
import { IoMdRadioButtonOff, IoIosGlasses, 
         IoMdCreate, IoIosMore, IoMdClose } from 'react-icons/io';

class DeckItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      displayModal: false,
      showDeckMenu: false,
    }
    this.displayModal = this.displayModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.showDeckMenu = this.showDeckMenu.bind(this);
    this.closeDeckMenu = this.closeDeckMenu.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  displayModal(e){
    e.stopPropagation();
    this.setState({displayModal: true});
  }

  closeModal(){
    this.setState({displayModal: false});
  }

  handleClick(deck){
    //open the preview modal- for now, use the 'OtherDeck' modal
    this.props.openModal({
      modal: "preview",
      package: { deck: this.props.deck }
    });
  }

  showDeckMenu(e) {
    e.preventDefault();
    e.stopPropagation();

    if (!this.state.showDeckMenu) {
      // 
      this.setState({ showDeckMenu: true }, () => {
        document.addEventListener('click', this.closeDeckMenu);
      }
      );
    } else {
      // 
      this.closeDeckMenu(e);
    }
  }

  closeDeckMenu(e) {
    this.setState({ showDeckMenu: false }, () => {
      document.removeEventListener('click', this.closeDeckMenu);
    });
  }

  // { deck, editDeck, deleteDeck, openModal } = this.props;
  render(){
    let deck = this.props.deck;
    let cards = this.props.cards;

    let numCards = 0;
    Object.values(cards).forEach(card => {
      if(card.deck_id === deck.id){
        numCards++;
      }
    })

    let cardWord = "cards";
    numCards === 1 ? cardWord = "card" : null;


    //
    return (
      <li>
        <div >
          <ul className="deck-row-contents">
            <li className="deck-selection-check-box">
              <div className="check-box not-checked">
                <div className="checkbox-control">
                  <IoMdRadioButtonOff />
                </div>
              </div>
            </li>
            <li className="deck-mastery">
              {this.props.deck.mastery}%
            </li>
            <li className="deck-info">
              {numCards > 0 ? (
                <div className="deck-name-caption">
                  <Link to={`/study/${deck.id}`}>
                    <h4 className="deck-name">{deck.title}</h4>
                    <p className="deck-caption"> {numCards} {cardWord} in this deck</p>
                  </Link>
                </div>
              ):(
                <div className="deck-name-caption">
                    <h4 className="deck-name">{deck.title}</h4>
                    <p className="deck-caption"> {numCards} cards in this deck</p>
                </div>
              )}
            </li>
            <li className="action-buttons">
              {numCards > 0 ? (
                <div>
                  <div onClick={this.handleClick} className="browse-button deck-action-button">
                    <IoIosGlasses />
                  </div>
                  <Link to={`/decks/${deck.id}/cards`}>
                    <div className="deck-cards-edit-modal deck-action-button" title="Edit the Cards in this Deck">
                      <IoMdCreate />
                    </div>
                  </Link>
                </div>
              ):(
                  <Link to={`/decks/${deck.id}/cards`} className="pill-button-add-cards">
                  <button className="pill-button add-cards">Add Cards</button>
                </Link>
              )}
              <div className="action-buttons deck-action-button" id={this.props.deck.id} onClick={this.showDeckMenu}>
                <div className="options-button">
                  <IoIosMore />
                </div>
              </div>
              {
                this.state.showDeckMenu
                ? (
                <div className="deck-options-dropdown">
                  <ul className="deck-options-menu">
                    <li className="dropdow-option"
                        onClick={(e)=>{ this.displayModal(e);
                        this.closeDeckMenu()}}>
                          <div className="drop-down-icon"><IoMdCreate /></div>
                          <div className="drop-down-text">Edit Deck</div>
                    </li>
                    <li className="dropdown-option"
                        onClick={() => this.props.deleteDeck(deck.id)}>
                          <div className="drop-down-icon"><IoMdClose /></div>
                          <div className="drop-down-text">Delete Deck</div>
                    </li>

                  </ul>
                </div>
                ) : (
                  null
                )
              }
            </li>
          </ul>
        </div>
          <DeckEditModal deck={deck} display={this.state.displayModal} 
                          closeModal={this.closeModal}/>        
      </li>
    )
  }
};

export default DeckItem;