import React from 'react';
import DeckItem from './deck_item';

class DeckIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    // debugger;
    this.props.fetchAllDecks();
  }

  render(){
    const { decks } = this.props;
    // debugger;
    return(
      <div>
        <h1>Hello from the DeckIndex</h1>
        <ul>
          {
            decks.map(deck=>{
              //debugger;
              return (
                <DeckItem
                key={`deck${deck.id}`} 
                deck={deck}
                editDeck={this.props.updateDeck}
                deleteDeck={this.props.deleteDeck}/>
              )
            })
          }
        </ul>


      </div>
    )
  }
}
export default DeckIndex;