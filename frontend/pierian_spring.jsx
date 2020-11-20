import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/session_api_util';
import * as CardUtil from './util/cards_api_util';
import { receiveCards, receiveCard, removeCard } from './actions/card_actions';
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
  window.updateCard = CardUtil.updateCard;
  window.deleteCard = CardUtil.deleteCard;
  window.createCard = CardUtil.createCard;
  window.receiveCards = receiveCards;
  window.receiveCard = receiveCard;
  window.removeCard = removeCard;


  window.getState = store.getState;
  window.dispatch = store.dispatch;

});
