import React from 'react';
import { ReactReduxContext } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { BsFillGearFill, BsPerson, BsToggles, BsBoxArrowRight } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { VscTriangleUp } from 'react-icons/vsc';

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
      showMenu: false,
    }
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(e) {
    e.preventDefault();
    e.stopPropagation();
    if (!this.state.showMenu){
      this.setState({showMenu: true}, () => {
          document.addEventListener('click', this.closeMenu);
        }
      );
    } else {
      // debugger;
      this.closeMenu();
    }
  }

  closeMenu() {
    // debugger;
    this.setState({showMenu: false}, () => {
        document.removeEventListener('click', this.closeMenu);
      } 
    );
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
        <Link style={{ textDecoration: 'none' }} to={`/profile`}>
          <div className="user">
            <div className="user-avatar">
              <div className="avatar-image">
                <CgProfile />
              </div>
            </div>
            <button className="options-gear" onClick={this.showMenu}>
                <BsFillGearFill />
            </button>
            <div className="user-name">
              <h3>{this.props.currentUser.first_name}</h3>
            </div>
            <div className="user-stats">
              <UserStats totalCards={count} totalDecks={ownDecks.length}/>
            </div>
          </div>
        </Link>
        {
          this.state.showMenu 
          ? (
            <div className="options-menu">
              <ul >
                <li>
                  < BsPerson/>
                  <p>View Profile</p>
                </li>
                <li>
                  <BsToggles />
                  <p >Manage Account</p>
                </li>
                <li onClick={this.props.logout}>
                  <BsBoxArrowRight />
                  <p>Log Out</p>
                </li>
              </ul>
            </div>
          ) : (
            null
          )
        }

      </div>
    )
  }
};


export default Profile;