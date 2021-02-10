import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { createDeck } from '../../actions/deck_actions';
import { copyCards } from '../../actions/card_actions';


class OtherDeck extends Component {
  constructor(props){
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(cards){
    //create a new deck, then
    // clear card data and add deck id
    // call copy cards api util
    let objective = this.props.objective || "";
    let newCards = _.cloneDeep(cards);

    let newDeck = {
      title: this.props.deck.title,
      objective: objective,
      mastery: 0,
    }

    this.props.createDeck(newDeck).then(res =>{
      
      let deckId = res.deck.id;
      newCards.forEach(card => {
        delete card.id;
        card.deck_id = deckId;
        card.last_view = 0;
        card.number_views = 0;
        card.score = 0;
      });
      this.props.copyCards(newCards).then(resp => {
        debugger;
      });
      
    })
    this.props.closeModal();
  }

  render() {
    let { deck } = this.props;
    let cards = [];
    Object.keys(this.props.cards).forEach(key => {
      if (this.props.cards[key].deck_id === deck.id) { 
        cards.push(this.props.cards[key]);
      }
    });

    return (
      <div className="other-deck-outer">
        <div className="edit-deck-form-cont container">
          <h2 className="edit-form-header">Flashcards in "{deck.title}"</h2>
          <form className="edit-deck-form" onSubmit={()=>this.handleSubmit(cards)}>
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
                  cards.map((card, index) => (
                    <tr key={index}>
                      <td className="table-row-number">
                        <div>
                          {index + 1}
                        </div>
                      </td>
                      <td className='table-td'>
                        <div className="other-deck-question">{card.question}</div>

                      </td>
                      <td className="filler-cell"></td>
                      <td className='table-td'>
                        <div className="other-deck-answer"> {card.answer}</div>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
            <div className="edit-deck-form-footer">
              <div className="edit-deck-form-actions">
                <button className='save-button' type='submit'>Add this Deck</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const mstp = (state)=> {

  return{
    cards: state.entities.cards,
    decks: state.entities.decks,
  }
}

const mdtp = (dispatch) => {

  return {
    createDeck: (deck) => dispatch(createDeck(deck)),
    copyCards: (cards) => dispatch(copyCards(cards))
  }
}

export default connect(mstp,mdtp)(OtherDeck);