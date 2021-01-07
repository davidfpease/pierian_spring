import React, { Component } from 'react'
import { GoPlus } from "react-icons/go";

export default class AddDeck extends Component {
  render() {
    return (
      <li className="create-new-deck-row" onClick={()=>this.props.openModal('createDeck')}>
        <ul className="deck-row-contents create-new-deck">
          <li className="li-spacer"></li>
          <li className="big-plus-button"><GoPlus /></li>
          <li className="label-and-bar">
            <div className="new-deck-label">Create New Deck</div>
            <div className="new-deck-progress-bar"></div>
          </li>
          <li className="action-buttons"></li>
        </ul>
      </li>
    )
  }
}
