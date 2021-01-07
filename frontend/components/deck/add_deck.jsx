import React, { Component } from 'react'

export default class AddDeck extends Component {
  render() {
    return (
      <li onClick={()=>this.props.openModal('createDeck')}>
        Create a new Deck
      </li>
    )
  }
}
