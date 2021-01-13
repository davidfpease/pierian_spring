import React from 'react';
import Card from './card';
import CardHeader from './card_header.jsx';
import shuffleCards from './shuffleCards.js';
import _ from 'lodash';



class CardIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
                  revealAnswer: false,
                  cardIndex: 0,  
                }
    this.originalCards = props.cards;
    this.cards = shuffleCards(_.cloneDeep(props.cards));
    this.clickReveal = this.clickReveal.bind(this);
    this.clickScore = this.clickScore.bind(this);
  }

  clickReveal(e) {
    e.stopPropagation();
    this.setState({revealAnswer: true});
    //
  }

  clickScore(e) {
    e.stopPropagation();
    let i = this.state.cardIndex;
    let cardId = this.cards[i].id;
    let card = this.originalCards.filter(crd => crd.id === cardId)[0];
    
    this.props.receiveScore(
      {
        score: e.currentTarget.id,
        index: i,
      }
      )
      this.setState({
        cardIndex: ++i,
        revealAnswer: false,
      });
      
      card.last_view = new Date();
      card.number_views += 1;
      card.score = Math.round((card.score + Number(e.currentTarget.id))/card.number_views);
      this.props.calculateMasteryScore(this.cards, card);
      debugger;
  }

  render(){
    //this needs to select only the cards from the current deck
    let deck = {};
    if (this.props.deck){
      deck = this.props.deck
    }

    let i = this.state.cardIndex;
    let card;
    if(this.cards && i < this.cards.length) {
      card= <Card card={this.cards[i]} clickReveal={this.clickReveal} 
      revealAnswer={this.state.revealAnswer}
      clickScore={this.clickScore}/>
    } else {

      //open the checkpoint modal
      // does not show the last answer before opening modal....
      // pass mastery score to the modal too
      
      this.props.openModal({
        modal: 'checkpoint', 
        package: {deckId: this.props.deckId,
                  mastery: this.masteryScore},
      });

      }
      
       
      return(
      <div className="outer">
        <CardHeader deck={deck} numCards={this.props.cards.length}/>
        <div className="card-container-outer">
            {card}
        </div>
      </div>
    )
  }
};

export default CardIndex;