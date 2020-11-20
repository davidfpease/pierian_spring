import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import cardsReducer from './cards_reducer'
import decksReducer from './decks_reducer'

const entitiesReducer = combineReducers({
  users: usersReducer,
  cards: cardsReducer,
  decks: decksReducer,
});

export default entitiesReducer;