import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { Link, withRouter } from 'react-router-dom';

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
    this.handleDemo = this.handleDemo.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  componentDidMount() {
     this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
      .then(() => this.props.history.push("/"))
      .then(() => this.closeModal());
  }

  handleDemo(e) {
    e.preventDefault();
    this.props.login({username: 'guest', password: 'password'})
      .then(() => this.props.history.push("/"))
      .then(() => this.closeModal());
  }


  openModal() {
    this.setState({showModal: true});
  }


  closeModal() {
    this.setState({showModal: false});
    this.props.history.push("/");
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
          isOpen={this.state.showModal}
          onRequestClose={this.closeModal}
          shouldCloseOnOverlayClick={true}
          className="modal"
          overlayClassName="overlay"
        >
          <form className="modal-form" onSubmit={this.handleSubmit}>
            <h3> Welcome back! </h3>
            <p>It's time for another camping adventure.</p>


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

            {
              (this.props.errors.length > 0) ?
                this.renderErrors() :  <div> </div>
            }
            <div className="submit">
              <button>Log In</button>
            </div>

            <div className="modal-footer">
              <p> Don't have a Hippocampus account?  <br /> <br />
                <Link to="/signup">Sign Up</Link>  or use a <br />
                <Link to="/" onClick={this.handleDemo}> Demo Login</Link>
              </p>
            </div>
          </form>
        </Modal>
      </div>
    );
  }
}

export default withRouter(LoginForm);
