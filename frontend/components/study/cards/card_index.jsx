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
    
    this.props.receiveScore(
      {
        score: e.currentTarget.id,
        index: i,
      }
    )
    this.setState({
      cardIndex: ++i,
      revealAnswer: false,
    })

  }

  render(){
    //this needs to select only the cards from the current deck
    let deck = {};
    if (this.props.decks){
      deck = this.props.decks[this.props.deckId]
    }
    //const { cards } = this.props;
//build out to 10 cards if less than 10
//select the 10 to view if > 10

debugger;

    let i = this.state.cardIndex;
    let card;
    if(this.cards && i < this.cards.length) {
      card= <Card card={this.cards[i]} clickReveal={this.clickReveal} 
      revealAnswer={this.state.revealAnswer}
      clickScore={this.clickScore}/>
    } else {
      card = (
        <div>No more Cards</div>
        )
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