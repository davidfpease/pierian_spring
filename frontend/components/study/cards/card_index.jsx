import React from 'react';
import Card from './card';
import CardHeader from './card_header.jsx';


class CardIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {cards: [],
                  nextCard: null,
                  prevCard: null,
                  userScores: [],
                  revealAnswer: false,
                  cardIndex: 0,  
                }
    this.clickReveal = this.clickReveal.bind(this);
    this.clickScore = this.clickScore.bind(this);
  }

  componentDidMount(){
    this.props.fetchAllCardsInDeck(this.props.deckId);
    // debugger;
  }

  clickReveal(e) {
    e.stopPropagation();
    //alert("yahtzee");
    this.setState({revealAnswer: true});
    //debugger;
  }

  clickScore(e) {
    e.stopPropagation();
    let i = this.state.cardIndex;
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
    const { cards } = this.props;
    
    
    
    
    
    let i = this.state.cardIndex;
    let card;
    if(cards && i < cards.length) {
      card= <Card card={cards[i]} clickReveal={this.clickReveal} 
      revealAnswer={this.state.revealAnswer}
      clickScore={this.clickScore}/>
    } else {
      card = (
        <div>No more Cards</div>
        )
      }
      
      debugger;
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