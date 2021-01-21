import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions';
import { login, receiveErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.session,
    formType: 'login',
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    login: (user) => dispatch(login(user)),
    closeModal: () => {
      dispatch(closeModal());
      dispatch(receiveErrors([]));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);