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
      imgUrl: 'http://res.cloudinary.com/deor0br3s/image/upload/v1523406588/grey_hippo_user_default_2.png',
      username: '',
      password: '',
      zip: '',
      showModal: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.showLogin = this.showLogin.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  componentDidMount() {
     this.props.clearErrors();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.modal === 'signup') {
      this.setState({ showModal: true })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state)
      .then(() => this.closeModal());
  }

  openModal() {
    this.setState({showModal: true});
  }

  showLogin() {
    this.setState({showModal: false});
    this.props.loadModal('login');
  }

  closeModal() {
    this.setState({showModal: false});
    this.props.hideModal();
  }

  renderErrors() {
    return(
      <ul className="auth-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }


  render() {
    return (
      <div className="react-modal-form">
        <Modal
          id="signupform"
          isOpen={this.state.showModal}
          onRequestClose={this.closeModal}
          shouldCloseOnOverlayClick={true}
          className="modal"
          overlayClassName="overlay"
        >
          <form className="modal-form" onSubmit={this.handleSubmit}>

            <img className="logo" src="http://res.cloudinary.com/deor0br3s/image/upload/v1523404915/Hippocampus_Logo_-_hippo_image.svg"/>
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

            <div className="input">
              <input
              type="text"
              placeholder="Zip"
              value={this.state.zip}
              onChange={this.update('zip')}/>
            </div>

            {
              (this.props.errors.length > 0) ?
                this.renderErrors() :  <div> </div>
            }

            <div className="submit">
              <button>Join Hippocampus</button>
            </div>

            <div className="modal-footer">
              <p>
                Already have a Hippocampus account? <br /><a onClick={this.showLogin}>Log In</a>
              </p>
            </div>
          </form>
        </Modal>

      </div>
    );
  }
}

export default withRouter(SignupForm);
