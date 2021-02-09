import React, { Component } from 'react'

export default class OtherDecks extends Component {
  constructor(props){
    super(props);
  }


  render() {
    debugger;
    return (
      <div>
        <ul>
          {Object.keys(this.props.decks).map(key => 
            (<li key={this.props.decks[key].id}>{this.props.decks[key].title}</li>)
          )}
        </ul>
      </div>
    )
  }
}
