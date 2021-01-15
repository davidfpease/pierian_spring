import React from 'react';
import CardIndex from './cards/card_index';
import StudySideBar from './study_sidebar_container';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchAllCardsInDeck, updateCard, updateCards } from '../../actions/card_actions';
import { updateDeck } from '../../actions/deck_actions';
import { addScore, resetScores } from '../../actions/progressBar_actions';

import { connect } from 'react-redux';

class Study extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      mastery: 0,
    }
    this.calculateMasteryScore = this.calculateMasteryScore.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllCardsInDeck(this.props.match.params.deck_id);
    this.props.closeModal();
    debugger;
    if (Object.keys(this.props.decks).length > 0){
      this.setState({
        mastery: this.props.decks[this.props.match.params.deck_id].mastery,
      })
    }
  }

  componentDidUpdate(prevProps){
    if (this.props.deck.mastery !== prevProps.deck.mastery){
      this.setState({
        mastery: this.props.decks[this.props.match.params.deck_id].mastery
      })
    }
  }

  calculateMasteryScore(allCards, card){    
    //update current card
    let index = allCards.findIndex(c => c.id === card.id);
    allCards[index] = card;
    
    //recalculate mastery
    let scores = {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0
    }

    allCards.forEach(card => scores[card.score]+= 1);
    let tallies = Object.keys(scores).map(key => (key * scores[key]));
    
    let mastery = tallies.reduce((accum, tally) => (accum + tally), 0) / 
    (allCards.length * 5);
    
    mastery = Math.round(mastery*1000) / 10;
    this.setState({
      mastery: mastery,
    })


  }


  render(){
    let deckId = this.props.match.params.deck_id;

    return (
      <div className="study">
        
        <StudySideBar mastery={this.state.mastery}/>   
        
        <CardIndex calculateMasteryScore={this.calculateMasteryScore} 
          deckId={deckId}
          mastery={this.state.mastery}
          cards={this.props.cards}
          deck={this.props.deck}
          receiveScore = {this.props.receiveScore}
          updateCard = {this.props.updateCard}
          updateCards = {this.props.updateCards}
          updateDeck = {this.props.updateDeck}
          openModal = {this.props.openModal}
          resetScores = {this.props.resetScores}
          />  
      </div>
    )
  }
}

const mstp = (state, ownProps) => {
  let deckId = ownProps.match.params.deck_id;
  let cardIds = Object.keys(state.entities.cards).filter(key =>
    state.entities.cards[key].deck_id.toString() === deckId) 

  return {
    decks: state.entities.decks,
    cards: cardIds.map(id => state.entities.cards[id]),
    deck: state.entities.decks[deckId]
  }
}

const mdtp = dispatch => {
  return {
    receiveScore: score => dispatch(addScore(score)),
    updateCard: (card) => dispatch(updateCard(card)),
    updateCards: (cards) => dispatch(updateCards(cards)),
    fetchAllCardsInDeck: (deckId) => dispatch(fetchAllCardsInDeck(deckId)),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    updateDeck: (deck) => dispatch(updateDeck(deck)),
    resetScores: () => dispatch(resetScores()),
  }
}

export default connect(mstp, mdtp)(Study);
