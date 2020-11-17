import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from '../actions/session_actions';

const nullUser = Object.freeze({ id: null });

const sessionReducer = (state = nullUser, action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState = { id: action.currentUser.id };
      return newState;
    case LOGOUT_CURRENT_USER:
      newState = { id: null };
      return newState;
    default:
      return state;
  } 
};

export default sessionReducer;