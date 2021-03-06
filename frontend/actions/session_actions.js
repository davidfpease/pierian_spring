import * as APIUtil from '../util/session_api_util';
import { closeModal } from './modal_actions';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = currentUser => {
  // 
  return{
    type: RECEIVE_CURRENT_USER,
    currentUser
  } 
};

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER,
  }
};

export const receiveErrors = errors => {
  return{
    type: RECEIVE_SESSION_ERRORS,
      errors
  }
};

// export const signup = user => dispatch => (
//   APIUtil.signup(user).then(user => (
//     dispatch(receiveCurrentUser(user))
//   ), error => (
//     dispatch(receiveErrors(error.responseJSON))
//   ))
// );

export const signup = user => {
  return dispatch => {
    return APIUtil.signup(user).then(user=>{
      dispatch(receiveCurrentUser(user));
      dispatch(closeModal());
    }, error => {
      return dispatch(receiveErrors(error.responseJSON))
    })
  }
};

// export const login = user => dispatch => (
//   APIUtil.login(user).then(user => (
//     dispatch(receiveCurrentUser(user))
//   ), error => (
//     dispatch(receiveErrors(error.responseJSON))
//   ))
// );

export const login = (user) => {
  return dispatch => {
    return APIUtil.login(user).then(resp => {
       dispatch(receiveCurrentUser(resp));
       dispatch(closeModal());
    },
      error => {
        return dispatch(receiveErrors(error.responseJSON))
      }
    )
  }
}

// export const logout = () => dispatch => (
//   APIUtil.logout().then(() => (
//     dispatch(logoutCurrentUser())
//   ))
// );

export const logout = () => {
  return dispatch => {
    return APIUtil.logout().then(()=> {
      return dispatch(logoutCurrentUser())
    })
  }
};