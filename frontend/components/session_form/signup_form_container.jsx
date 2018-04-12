import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signup, clearErrors } from '../../actions/session_actions';
import { hideModal, loadModal } from '../../actions/modal_actions';
import SignupForm from './signup_form';

const mapStateToProps = ({ errors, ui }) => {
  return {
    errors: errors.session,
    formType: 'signup',
    modal: ui.modal,
  };
};

const mapDispatchToProps = dispatch => ({
  signup: (user) => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors()),
  hideModal: () => dispatch(hideModal()),
  loadModal: modalType => dispatch(loadModal(modalType)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
