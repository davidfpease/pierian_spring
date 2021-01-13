import React from 'react';
import Card from './card';
import CardHeader from './card_header.jsx';
import shuffleCards from './shuffleCards.js';


class CardIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
                  revealAnswer: false,
                  cardIndex: 0,  
                }
    this.cards = shuffleCards(props.cards);
    this.clickReveal = this.clickReveal.bind(this);
    this.clickScore = this.clickScore.bind(this);
  }

  componentDidMount(){
    
    this.props.fetchAllCardsInDeck(this.props.deckId);
  }

  clickReveal(e) {
    e.stopPropagation();
    this.setState({revealAnswer: true});
    //
  }

  clickScore(e) {
    e.stopPropagation();
    let i = this.state.cardIndex;
    let card = this.cards[i];
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
      card.score = Math.floor((card.score + e.currentTarget.id)/card.number_views);
      this.props.calculateMasteryScore(this.props.cards, card);

  }

  render(){
    //this needs to select only the cards from the current deck
    let deck = {};
    if (this.props.decks){
      deck = this.props.decks[this.props.deckId]
    }

    let i = this.state.cardIndex;
    let card;
    if(this.cards && i < this.cards.length) {
      card= <Card card={this.cards[i]} clickReveal={this.clickReveal} 
      revealAnswer={this.state.revealAnswer}
      clickScore={this.clickScore}/>
    } else {

      //open the checkpoint modal
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