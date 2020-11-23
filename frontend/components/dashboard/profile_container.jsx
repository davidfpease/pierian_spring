import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Profile from './profile';
import { fetchAllCards } from '../../actions/card_actions';
import { fetchAllDecks }  from '../../actions/deck_actions';

/*
entities:
cards: {}
decks:
20: {id: 20, title: "Study deck 2", objective: "Get the smartest "}
21: {id: 21, title: "Study deck 3", objective: "Get smartest"}
22: {id: 22, title: "Study deck 1", objective: "Get smart"}
23: {id: 23, title: "Study deck 4", objective: "Get smart 4"}
27: {id: 27, title: "Study deck 4", objective: "UppppDAYT"}
users: {28: {…}}
errors: {session: Array(0)}
session: {id: 28}
ui: {modal: null}
*/

const mstp = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    allCards: state.entities.cards,
    allDecks: state.entities.decks,
  };
};

const mdtp = dispatch => ({
  logout: () => dispatch(logout()),
  fetchAllCards: () => dispatch(fetchAllCards()),
  fetchAllDecks: () => dispatch(fetchAllDecks()),
});

export default connect(mstp, mdtp)(Profile);
