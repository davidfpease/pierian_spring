import React from 'react';
import { ReactReduxContext } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

const UserStats = (props) => {
  //debugger;
  return (
    <div>
      <h2>This is a test of internal component</h2>
      <h3>Total cards: {props.totalCards}</h3>
      <h3>Total decks: {props.totalDecks}</h3>
    </div>

  )
};


class Profile extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      numCards: 0,
    }
  }

  
  render(){
    let count = 0;
    const ownDecks = [];
    //collect all decks created by current user
    Object.values(this.props.allDecks).forEach(deck => {
      if (deck.creator_id === this.props.currentUser.id) {
        ownDecks.push(deck.id);
      }
    })
    
    let cardIds = [];
    Object.values(this.props.allCards).forEach(card => cardIds.push(card.deck_id));

    //count number of cards in each deck
    ownDecks.forEach(deckId => {
      cardIds.forEach(id => {
        if (id === deckId) {
          count++;
        }
      })
    });


    return (
      <div>
        hello from the profile component.
        <button onClick={this.props.logout}>Log Out</button>
        <div className="user">
          <div className="user-avatar">

          </div>
          <h3 className="user-name">{this.props.currentUser.first_name}</h3>
          <div className="user-stats">
            <UserStats totalCards={count} totalDecks={ownDecks.length}/>
          </div>

        </div>
        

      </div>
    )
  }
};


export default Profile;