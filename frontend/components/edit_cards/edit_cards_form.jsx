import React from 'react';
import { BiPlusCircle } from 'react-icons/bi';
import _ from 'lodash';


class EditCardsForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {cards: [],
                  deletedCards: []};
    this.update = this.update.bind(this);
    this.tempDeleteCard = this.tempDeleteCard.bind(this);
    this.addNewCard = this.addNewCard.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    //set state to all cards from just his deck as an array.
    let cardsArray = Object.keys(this.props.cards).map(key => this.props.cards[key]);
    let cards = cardsArray.filter(card => card.deck_id === this.props.deck.id);
    let cardsCopy = _.cloneDeep(cards);
    this.setState({cards: cardsCopy});
  }

  update(field, cardNum) {
    return e => {
      let newCards = this.state.cards.slice();
      let editCard = newCards[cardNum];
      editCard[field] = e.currentTarget.value;
      this.setState({cards: newCards});
      }
  }

  tempDeleteCard(cardNum) {
    let newCards = this.state.cards.slice();
    let existingDeleted = this.state.deletedCards.slice();
    let deletedCard = newCards[cardNum];
    
    newCards.splice(cardNum,1);
    this.setState({
      cards: newCards,
      deletedCards: existingDeleted.push(deletedCard),
    })
  }

  addNewCard(){
    let newCards = this.state.cards;
    newCards.push({question: "",
                    answer: "",
                    deck_id: this.props.deck.id});
    this.setState({cards: newCards});

  }

  handleSubmit(e) {
    e.preventDefault();
    // commmit any changed cards to the store
      //iterate through each state.cards and check against the store
        // if changes, call the update card action
        
    const storeCards = this.props.cards;
    let func = this.props.updateCard;
    this.state.cards.forEach(card=>{
      
      if ('id' in card && card.id in storeCards){
        if (storeCards[card.id].question.valueOf() != card.question.valueOf() ||
          storeCards[card.id].answer.valueOf() != card.answer.valueOf()){
          debugger;
          func(card);
        }
      }
    })
    // remove any deleted cards from the store
      //iterate through the deletedCards
        // call deleteCard for each item (if there is a card id)

  }

  

  render(){
    
    const deck = this.props.deck;
    // debugger;
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <table>
            <tbody>
            {
              this.state.cards.map((card, index) =>(
                <tr key={index}>
                  <td>
                    <div>
                      {index + 1}
                    </div>
                  </td>
                  <td>
                    <textarea onChange={this.update('question', index)} value={card.question}></textarea>
                    
                  </td>
                  <td>
                    <textarea onChange={this.update('answer', index)} value={card.answer}></textarea>
                  </td>
                  <td>
                    <div onClick={()=> this.tempDeleteCard(index)}>X</div>
                  </td>
                  
                </tr>

              ) )
            }
            </tbody>
          </table>
          <div>
            <div onClick={() => this.addNewCard()}><span><BiPlusCircle/></span>Add Card</div>
            <div className='reset-edit-form'>Reset</div>
            <button className='save-button' type='submit'>Save this Deck</button>
          </div>
        </form>
      </div>
    );
  };

}

export default EditCardsForm;