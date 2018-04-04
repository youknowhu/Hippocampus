import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../actions/session_actions';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  render() {
      console.log(this.props.logout)
      return (
      <header class="nav-header">
        <div class="nav-left">
          <img class="logo" src="http://res.cloudinary.com/deor0br3s/image/upload/c_scale,w_255/v1522784845/hippocampus_logo.png"/>
          <nav class="discover-nav">
            <ul>
              <li class="search"><i class="fa fa-search"></i><strong>Search</strong></li>
              <li><label>Camping</label></li>
              <li><label>Hosting</label></li>
              <li><label>Scuting</label></li>
              <li><label>About</label></li>
            </ul>
          </nav>
        </div>
        <div class="nav-right">
          {
            (this.props.currentUser === null) ?
              <h4><Link to="/login" className="js-modal-open">Log In</Link></h4> :
              <h4><Link to="/" onClick={this.handleLogout}>Log Out</Link></h4>
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


export default connect(mapStateToProps)(NavBar);
