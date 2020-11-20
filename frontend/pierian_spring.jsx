import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/session_api_util';
import * as CardUtil from './util/cards_api_util';
import * as DeckActions from './actions/deck_actions';
import * as thunkActions from './actions/session_actions';
import configureStore from './store/store';
import Root from './components/root';
import thunk from 'redux-thunk';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);

  //TESTING
  
  window.login = thunkActions.login;
  window.signup = APIUtil.signup;
  window.logout = APIUtil.logout;
  window.fetchAllCards = CardUtil.fetchAllCards;
  window.fetchAllDecks = DeckActions.fetchAllDecks;

  window.updateDeck = DeckActions.updateDeck;
  window.deleteDeck = DeckActions.deleteDeck;
  window.createDeck = DeckActions.createDeck;


  window.getState = store.getState;
  window.dispatch = store.dispatch;

});
