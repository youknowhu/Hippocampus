import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../actions/session_actions';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e)  {
    e.preventDefault();
    this.props.logout();
  }

  render() {
      return (
      <header className="nav-header">
        <div className="nav-left">
          <img className="logo" src="http://res.cloudinary.com/deor0br3s/image/upload/v1522784845/hippocampus_logo.svg"/>
          <nav className="discover-nav">
            <ul>
              <li className="search"><i className="fa fa-search"></i><strong>Search</strong></li>
              <li><label>Camping</label></li>
              <li><label>Hosting</label></li>
              <li><label>Scouting</label></li>
              <li><label>About</label></li>
            </ul>
          </nav>
        </div>
        <div className="nav-right">
        {
          (this.props.currentUser === undefined || this.props.currentUser === null) ?
            <div> </div>
            :
            <h2>Hello, {this.props.currentUser.username}</h2>
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

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
  }
}


const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
