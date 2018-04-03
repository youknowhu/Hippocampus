import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      showModal: true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    debugger
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  openModal() {
    this.setState({showModal: true});
  }


  closeModal() {
    this.setState({showModal: false});
  }


  render() {
    return (
      <div className="login-modal-form">
        <Modal
          isOpen={this.state.showModal}
          onRequestClose={this.closeModal}
        >
          <form className="modal-form" onSubmit={this.handleSubmit}>
            <h3> Welcome back! </h3>
            <p>It's about time for another camping adventure.</p>

            <div className="input">
              <label>
                <input
                type="text"
                placeholder="Username"
                value={this.state.username}
                onChange={this.update('username')}/>
              </label>
            </div>

            <div className="input">
              <input
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.update('password')}/>
            </div>

            <div className="submit">
              <button>Log In</button>
            </div>

            <div className="modal-footer">
              <p>
                Don't have a Hippocampus account? <br /> <a href="#">Sign Up!</a>
              </p>
            </div>
          </form>
          <div class="modal-screen">
          </div>
        </Modal>

      </div>
    );
  }
}

export default withRouter(LoginForm);
