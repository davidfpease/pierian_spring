import React from 'react';
import DeckItem from './deck_item';
import { Link, Redirect } from 'react-router-dom';
import { IoIosPlayCircle, IoMdShare, IoIosMore } from 'react-icons/io';

class DeckIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchAllDecks();
  }

  render(){
    const { decks } = this.props;
    //debugger;
    return(
      <div className="deck-index">
        <div className="first-row">
          <div className="deck-image-icon">
            <img id="deck-image" src={window.ugs} />
          </div>
          <div className="deck-details">
            <div className="available-decks">Available Decks</div>
            
            <div className="deck-creator">
              Creator:<span> </span>
              <span className="deck-creator-name">
                <Link to="/profile">
                  {this.props.currentUser.first_name} {this.props.currentUser.last_name}
                </Link>
              </span>
            </div>
            <div className="deck-actions">
              <div className="deck-action-buttons">
                <div className="deck-action-button"><IoIosPlayCircle /></div>
                <div className="deck-action-button"><IoMdShare /></div>
                <div className="deck-action-button"><IoIosMore /></div>
              </div>
            </div>
          </div>
        </div>

        <div className="second-row">    
          <ul className="tabs">
            <li className="tab-item">
              <div className="tab-label">About</div>
            </li>
            <li className="tab-item">
              <div className="tab-label">Decks</div>
            </li>
            <li className="tab-item">
              <div className="tab-label">Learners</div>
            </li>
          </ul>
        </div>
            <ul className="deck-list">
              {
                decks.map(deck=>{
                  //debugger;
                  return (
                    <DeckItem
                    key={`deck${deck.id}`} 
                    deck={deck}
                    cards={this.props.cards}
                    editDeck={this.props.updateDeck}
                    deleteDeck={this.props.deleteDeck}
                    />
                  )
                })
              }
            </ul>

        </div>
    )
  }
}
export default DeckIndex;