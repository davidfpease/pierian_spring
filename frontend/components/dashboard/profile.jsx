import React from 'react';
import { ReactReduxContext } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

const UserStats = (props) => {
  return (
    <div>
      <h2>This is a test of internal component</h2>
      <h3>Total cards: {props.totalCards}</h3>
    </div>

  )
};


class Profile extends React.Component{

  componentDidMount(){
    this.props.fetchAllCards();
  }

  render(){
    //calculate the number of cards this user has built
    //trigger a re-render?
    let number;
    if(this.props.allCards){
      number =3;
    }

    return (
      <div>
        hello from the profile component.
        <div className="user">
          <div className="user-avatar">

          </div>
          <h3 className="user-name">{this.props.currentUser.first_name}</h3>
          <div className="user-stats">
            <UserStats numCards={number}/>
          </div>

        </div>
        

      </div>
    )
  }
};


export default Profile;