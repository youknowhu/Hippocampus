import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { logout } from '../actions/session_actions';
import { receiveGeolocationEntry, receiveMapBounds } from '../actions/geolocation_actions';
import { loadModal } from '../actions/modal_actions';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.showLogin = this.showLogin.bind(this);
    this.handleenter = this.handleEnter.bind(this);


    this.state = {
      searchInput: '',
    }
  }

  showLogin() {
    this.props.loadModal('login');
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.geolocation != nextProps.geolocation) {
      this.setState({ searchInput: nextProps.geolocation})
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

  handleExploreClick() {
    return e => {
      if (this.props.history.location.pathname !== '/explore') {
        this.props.history.push('/explore')
      }
    }
  }

  handleEnter() {
    return e => {
      if (e.charCode == '13') {
        this.props.receiveGeolocationEntry(this.state.searchInput);
        window.localStorage.clear()

        if (this.props.history.location.pathname !== '/explore') {
          this.props.history.push('/explore')
        }
      }
    }
  }

  handleClear() {
    return e => {
      this.props.receiveGeolocationEntry('');
      this.setState({searchInput: ''})
    }
  }

  render() {
      return (
      <header className="nav-header">
        <div className="nav-left">
          <Link to="/"><img className="logo" src="https://res.cloudinary.com/deor0br3s/image/upload/v1523405170/Hippocampus_Logo_-_hippo_image_1.svg"/> </Link>
          <nav className="discover-nav">
            <ul>
              <li className="search">
                  <i className="fa fa-search"
                  onClick={this.handleExploreClick()}></i>
                  <input
                    className="controls"
                    type="text"
                    placeholder="Find camping near..."
                    onChange={this.handleInput()}
                    onKeyPress={this.handleEnter()}
                    value={this.state.searchInput}/>
                    {
                      (this.state.searchInput === '') ?
                        <div> </div> : <h2 onClick={this.handleClear()}>x</h2>
                    }
                </li>
                <li className='github'>
                  <a href="https://github.com/youknowhu/Hippocampus"> <i className="fa fa-github"></i></a>
                </li>
                <li className='linkedin'>
                  <a href="https://www.linkedin.com/in/kimberly-hu/"> <i className="fa fa-linkedin"></i> </a>
                </li>
            </ul>
          </nav>
        </div>
        <div className="nav-right">
          {
          (this.props.currentUser === undefined || this.props.currentUser === null) ?
            <div>
            </div>
            :
              <div className='current-user-info'>
                <img src={this.props.currentUser.imgUrl} />
                <h2>{this.props.currentUser.firstName} </h2>
              </div>
          }
          {
            (this.props.currentUser === null) ?
              <h4>
                <button onClick={this.showLogin}>Log In</button>
              </h4>
              :
              <h4>
                <button onClick={this.handleLogout}>Log Out</button>
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
    geolocation: state.ui.geo.geolocation,
  }
}


const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    receiveGeolocationEntry: entry => dispatch(receiveGeolocationEntry(entry)),
    receiveMapBounds: bounds => dispatch(receiveMapBounds(bounds)),
    loadModal: modalType => dispatch(loadModal(modalType)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
