import React from 'react';
import { BiPlusCircle } from 'react-icons/bi';
import { FaWindowClose } from 'react-icons/fa';
import _ from 'lodash';
import { useHistory } from "react-router-dom";

class EditCardsForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {cards: [],
                  deletedCards: []};
    this.update = this.update.bind(this);
    this.tempDeleteCard = this.tempDeleteCard.bind(this);
    this.addNewCard = this.addNewCard.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.reset = this.reset.bind(this);
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
    // debugger;
    let existingDeleted = this.state.deletedCards.slice();
    let deletedCard = newCards[cardNum];
    // debugger;
    newCards.splice(cardNum,1);
    existingDeleted.push(deletedCard);
    this.setState({
      cards: newCards,
      deletedCards: existingDeleted,
    })
    // debugger;
  }

  addNewCard(){
    let newCards = this.state.cards;
    newCards.push({question: "",
                    answer: "",
                    deck_id: this.props.deck.id});
    this.setState({cards: newCards});
    debugger;
  }

  reset(e){
    e.preventDefault();
    let cardsArray = Object.keys(this.props.cards).map(key => this.props.cards[key]);
    let cards = cardsArray.filter(card => card.deck_id === this.props.deck.id);
    let cardsCopy = _.cloneDeep(cards);
    debugger;
    this.setState({ cards: cardsCopy,
                    deletedCards: [] });
  }

  handleSubmit(e) {
    e.preventDefault();
    // commmit any changed cards to the store
      //iterate through each state.cards and check against the store
        // if changes, call the update card action
        
    const storeCards = this.props.cards;
    this.state.cards.forEach(card=>{
      
      if ('id' in card && card.id in storeCards){
        if (storeCards[card.id].question.valueOf() != card.question.valueOf() ||
          storeCards[card.id].answer.valueOf() != card.answer.valueOf()){
          debugger;
          this.props.updateCard(card);
        }
      } else {
        //add any new cards to store
        this.props.createCard(card, this.props.deck.id);
      }
    })

    // remove any deleted cards from the store
      //iterate through the deletedCards
        // call deleteCard for each item (if there is a card id)
    this.state.deletedCards.forEach(card => {
      if ('id' in card && card.id in storeCards) {
        this.props.deleteCard(card.id);
      }
    })
    //redirect to deck index.
    // this.routeChange();
    this.props.history.push('/dashboard');
    
  }

  

  render(){
    
    const deck = this.props.deck || {title: ""};

    return(
      <div className="edit-deck-outer">
        <div className="edit-deck-form-cont container">
          <h2 className="edit-form-header">Flashcards in "{deck.title}"</h2>
          <form className="edit-deck-form" onSubmit={this.handleSubmit}>
            <table className="edit-deck-table">
              <thead>
                <tr className="table-row">
                  <th className='number-sign'>#</th>
                  <th>Question</th>
                  <th></th>
                  <th>Answer</th>
                  <th> </th>
                </tr>
              </thead>
              <tbody>
              {
                this.state.cards.map((card, index) =>(
                  <tr key={index}>
                    <td className="table-row-number">
                      <div>
                        {index + 1}
                      </div>
                    </td>
                    <td className='table-td'>
                      <textarea onChange={this.update('question', index)} value={card.question}></textarea>
                      
                    </td>
                    <td className="filler-cell"></td>
                    <td className='table-td'>
                      <textarea onChange={this.update('answer', index)} value={card.answer}></textarea>
                    </td>
                    <td>
                      <div onClick={() => this.tempDeleteCard(index)} className="edit-deck-form-close"><FaWindowClose /></div>
                    </td>
                    
                  </tr>

                ) )
              }
              </tbody>
            </table>
            <div className="edit-deck-form-footer">
              <div className="add-card" onClick={() => this.addNewCard()}><span><BiPlusCircle/></span>Add Card</div>
              <div className="edit-deck-form-actions">
                <button onClick={(e)=>this.reset(e)} className='reset-edit-form'>Reset</button>
                <button className='save-button' type='submit'>Save this Deck</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  };

}

export default EditCardsForm;