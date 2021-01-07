import React, { Component } from 'react'

export default class CreateDeckForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      deckTitle: "",
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field){
    return e => {
      this.setState({
      [field]: e.currentTarget.value,
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const newDeck = {
      title: this.state.deckTitle,
      objective: "",
    }
    this.props.processForm(newDeck);
    this.props.closeModal();
  }

  render() {
    return (
      <div>
        <div className="new-modal-body">
          <div class="close-x" onClick={this.props.closeModal}>
            <img src="http://localhost:3000/assets/close-outline-db3fcdd21c62170ac1beaafbb0dc9f5a53d629d4095a8284b2d30fb1431af6d7.svg"/>

          </div>
          <div className="icon-button close-button close-modal-button"><i className="ion-ios-close-empty"></i></div>
          <div className="new-modal-content">
            <div className="new-modal-title">Create New Deck</div>
            <div className="new-modal-guidance">A Deck is a subset of Flashcards in a Class, similar to chapters in a book</div>
            <form className="create-deck-form">
              <div className="text-field new-deck-name">
                <div className="input-and-buttons">
                  <input onChange={this.update('deckTitle')} className="text-input" id="new-deck-name"
                    placeholder="e.g. Cell Division, Capitals of Asia"
                    type="text">
                  </input>

                </div>
                  <div className="field-caption"><span className="caption-text">Enter the title of your new deck above</span></div>
              </div>
            </form>
              <div className="new-modal-actions">
                <div onClick={this.handleSubmit} 
                className={this.state.deckTitle.length > 0 ? "pill-button" : "pill-button is-disabled"} 
                  label="Continue"><span className="label">Continue</span>
                </div>
              </div>
          </div>
        </div>
      </div>
    )
  }
}
