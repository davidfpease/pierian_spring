import React from 'react';
import { openModal } from '../../actions/modal_actions';
import StudySideBar from './study_sidebar';


import { connect } from 'react-redux';

const mstp = (state) => {
  
  
  return {
    progressBar: state.entities.progressBar, 
  }
}

const mdtp = dispatch => {
  // 
  return {
    openModal: (modalType) => dispatch(openModal(modalType)),
  }
}

export default connect(mstp, mdtp)(StudySideBar);