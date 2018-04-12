import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signup, clearErrors } from '../../actions/session_actions';
import { hideModal, showModal } from '../../actions/modal_actions';
import SignupForm from './signup_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'signup',
  };
};

const mapDispatchToProps = dispatch => ({
  signup: (user) => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors()),
  hideModal: () => dispatch(hideModal()),
  showModal: modalType => dispatch(showModal(modalType)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
