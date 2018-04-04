import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { Link, withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      imgUrl: 'http://res.cloudinary.com/deor0br3s/image/upload/v1522783892/favicon.png',
      username: '',
      password: '',
      showModal: true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state)
      .then(() => this.props.history.push("/"))
      .then(() => this.closeModal());
  }

  openModal() {
    this.setState({showModal: true});
  }


  closeModal() {
    this.setState({showModal: false});
  }


  render() {
    return (
      <div className="react-modal-form">
        <Modal
          isOpen={this.state.showModal}
          onRequestClose={this.closeModal}
        >
          <form className="modal-form" onSubmit={this.handleSubmit}>

            <img class="logo" src="http://res.cloudinary.com/deor0br3s/image/upload/v1522784845/hippocampus_logo.svg"/>
            <p>Your next adventure is waiting.</p>

            <div className="input">
              <label>
                <input
                type="text"
                placeholder="First Name"
                value={this.state.firstName}
                onChange={this.update('firstName')}/>
              </label>
            </div>

            <div className="input">
              <label>
                <input
                type="text"
                placeholder="Last Name"
                value={this.state.lastName}
                onChange={this.update('lastName')}/>
              </label>
            </div>

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
              <button>Join HippoCampus</button>
            </div>

            <div className="modal-footer">
              <p>
                Already have a Hippocampus account? <br /><Link to="/login">Log In</Link>
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

export default withRouter(SignupForm);
