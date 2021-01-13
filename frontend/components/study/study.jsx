import React from 'react';
import CardIndexContainer from './cards/cards_container';
import StudySideBar from './study_sidebar_container';
import { connect } from 'react-redux';

class Study extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      mastery: props.decks[props.match.params.deck_id].mastery,
    }
    this.calculateMasteryScore = this.calculateMasteryScore.bind(this);
  }

  calculateMasteryScore(allCards, card){    
    debugger;
    //update current card
    let index = allCards.findIndex(c => c.id === card.id);
    allCards[index] = card;


    //recalculate mastery


  }


  render(){
    return (
      <div className="study">
        
        <StudySideBar mastery={this.state.mastery}/>   
        
        <CardIndexContainer calculateMasteryScore={this.calculateMasteryScore} 
          deckId={this.props.match.params.deck_id}
          mastery={this.state.mastery}/>  




      </div>
    )
  }
}

const mstp = (state) => {
  return {
    decks: state.entities.decks,
    cards: Object.keys(state.entities.cards).map(key => state.entities.cards[key])
  }
}

export default connect(mstp)(Study);
