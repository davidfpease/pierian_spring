import React from 'react';
import Card from './card';

class CardIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {cards: { },
                  nextCard: null,
                  prevCard: null,
                  userScores: [],  
                }
  }

  componentDidMount(){
    this.props.fetchAllCards(this.props.deckId);
    // debugger;
  }

  render(){
    const { cards } = this.props;
    debugger;
    //logic here to determine which card to render
      //display next card
      //update 

      let i = 0;
      let card;
      if(cards) {
        card= <Card card={cards[i]}/>
      }

    return(
      <div>
        Hello from the cards index
        <div>
            {card}
        </div>
      </div>
    )
  }
};

export default CardIndex;