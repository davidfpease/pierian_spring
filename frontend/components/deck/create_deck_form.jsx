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
          <div className="mobile-branding">Brainscape</div>
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
                <div onClick={this.handleSubmit} className="pill-button is-disabled resolve-modal-button" label="Continue"><span className="label">Continue</span></div>
              </div>
          </div>
        </div>
      </div>
    )
  }
}
