import React from 'react';
import DeckItem from './deck_item';
import AboutTab from './about_tab';
import LearnersTab from './learners_tab';
import AddDeck from './add_deck';
import { Link, Redirect } from 'react-router-dom';
import { IoIosPlayCircle, IoMdShare, IoIosMore } from 'react-icons/io';

class DeckIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabSelected: "decks",
    }
    this.handleTabClick = this.handleTabClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllDecks();
  }

  handleTabClick(e){
    
    this.setState({
      tabSelected: e.currentTarget.id,
    })
  }

  render(){
    const { decks } = this.props;
    const currentTab = this.state.tabSelected;

    let deckDisplay;
    if (decks.length === 0){
      deckDisplay = "Decks";
    } else {
      deckDisplay = `Decks (${decks.length})`;
    }
    
    let tab = <div className="deck-list-container">
      <ul className="deck-list">
        {
          decks.map(deck => {
            //
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
          <AddDeck openModal={this.props.openModal} createDeck={this.props.createDeck}/>
      </ul>
    </div>

  switch (this.state.tabSelected){
    case('learners'):
      tab = <LearnersTab />
      break;
    case('about'):
      tab = <AboutTab />
      break;
    default:
      break;
  }

  
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
            <li onClick={this.handleTabClick} id='about' className={currentTab === 'about' ? "tab-item active" : "tab-item"}>
              <div className="tab-label">About</div>
            </li>
            <li onClick={this.handleTabClick} id='decks' className={currentTab === 'decks' ? "tab-item active" : "tab-item"}>
              <div className="tab-label">{deckDisplay}</div>
            </li>
            <li onClick={this.handleTabClick} id='learners' className={currentTab === 'learners' ? "tab-item active" : "tab-item"}>
              <div className="tab-label">Learners</div>
            </li>
          </ul>
        </div>
        {tab}
        </div>
    )
  }
}
export default DeckIndex;