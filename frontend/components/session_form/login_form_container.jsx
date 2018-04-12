import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login, clearErrors } from '../../actions/session_actions';
import { hideModal, loadModal } from '../../actions/modal_actions';
import LoginForm from './login_form';

const mapStateToProps = ({ errors, ui }) => {
  return {
    errors: errors.session,
    formType: 'login',
    modal: ui.modal,
  };
};

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors()),
  hideModal: () => dispatch(hideModal()),
  loadModal: modalType => dispatch(loadModal(modalType)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
