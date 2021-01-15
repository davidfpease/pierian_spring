import React, { Component } from 'react'

export default class NewModal extends Component {

  componentDidMount(){
    
    this.props.updateCards(this.props.cards);
    let newDeck = this.props.deck;
    newDeck.mastery = this.props.mastery;
    this.props.updateDeck(newDeck);

    this.props.openModal({
      modal: 'checkpoint',
      package: {
        deckId: this.props.deckId,
        mastery: this.props.mastery,
        originalCards: this.props.cards,
      },
    });


  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}
