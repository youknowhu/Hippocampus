import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { logout } from '../actions/session_actions';
import { receiveGeolocationEntry } from '../actions/geolocation_actions';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleClear = this.handleClear.bind(this);

    this.state = {
      searchInput: '',
    }
  }

  handleLogout(e)  {
    e.preventDefault();
    this.props.logout();
    const currentPath = this.props.history.location.pathname
    if (currentPath.match(/\//g).length > 2) {
      this.props.history.goBack();
    }
  }

  handleInput() {
    return e => {
      this.setState({ searchInput: e.target.value}, this.handleEnter)
    }
  }

  handleEnter() {
    return e => {
      if (e.charCode == '13') {
        this.props.receiveGeolocationEntry(this.state.searchInput);
        this.props.history.push("/explore")
      }
    }
  }

  handleClear() {
    return e => {
      this.props.receiveGeolocationEntry('')
      this.setState({searchInput: ''})
    }
  }

  render() {
      return (
      <header className="nav-header">
        <div className="nav-left">
          <Link to="/"><img className="logo" src="http://res.cloudinary.com/deor0br3s/image/upload/v1523405170/Hippocampus_Logo_-_hippo_image_1.svg"/> </Link>
          <nav className="discover-nav">
            <ul>
              <li className="search">
                  <i className="fa fa-search"></i>
                  <input
                    id="pac-input"
                    className="controls"
                    type="text"
                    placeholder="Find camping near..."
                    onChange={this.handleInput()}
                    onKeyPress={this.handleEnter()}
                    value={this.state.searchInput}/>
                  <h2 onClick={this.handleClear()}>x</h2>
                </li>
            </ul>
          </nav>
        </div>
        <div className="nav-right">
        {
          (this.props.currentUser === undefined || this.props.currentUser === null) ?
            <div> </div>
            :
            <h2>Hello, {this.props.currentUser.firstName}</h2>
        }
          {
            (this.props.currentUser === null) ?
              <h4>
                <Link to="/login" >Log In</Link>
              </h4>
              :
              <h4>
                <Link to="/" onClick={this.handleLogout}>Log Out</Link>
              </h4>
            }
          </div>
        </header>
      )
    }
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
  }
}


const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    receiveGeolocationEntry: entry => dispatch(receiveGeolocationEntry(entry))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
