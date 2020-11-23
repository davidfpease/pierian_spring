import React from 'react';
import { ReactReduxContext } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { BsFillGearFill, BsPerson, BsToggles, BsBoxArrowRight } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';

const UserStats = (props) => {
  //debugger;
  return (
    <div>
      <div className="user-stats">
        <span>{props.totalCards} Total Cards </span>
        <span> • {props.totalDecks} Decks Created</span>
      </div>
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
        <div className="user">
          <div className="user-avatar">
            <CgProfile />
          </div>
          <div className="user-name">{this.props.currentUser.first_name}</div>
          <div className="user-stats">
            <UserStats totalCards={count} totalDecks={ownDecks.length}/>
          </div>
        </div>
        <div className="options-gear">
            <BsFillGearFill />
        </div>
        <ul className="options-menu">
          <li>
            < BsPerson/>
            <a href='/'>View Profile</a>
          </li>
          <li>
            <BsToggles />
            <a href='/'>Manage Account</a>
          </li>
          <li onClick={this.props.logout}>
            <BsBoxArrowRight />
            <button >Log Out</button>
          </li>
        </ul>
        

      </div>
    )
  }
};


export default Profile;