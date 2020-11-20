import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import cardsReducer from './cards_reducer'

const entitiesReducer = combineReducers({
  users: usersReducer,
  cards: cardsReducer,
});

export default entitiesReducer;