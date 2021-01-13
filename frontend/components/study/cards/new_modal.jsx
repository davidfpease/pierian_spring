import React, { Component } from 'react'

export default class NewModal extends Component {

  componentDidMount(){
    this.props.openModal({
      modal: 'checkpoint',
      package: {
        deckId: this.props.deckId,
        mastery: this.props.mastery
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
