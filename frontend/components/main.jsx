import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { receiveSingleFilter, receivePricingFilter } from '../actions/filter_actions';
import { fetchHomePageListings } from '../actions/listing_actions';
import { receiveGeolocationEntry } from '../actions/geolocation_actions';

class HomeMain extends React.Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.handleEnter = this.handleEnter.bind(this);

    this.state = {
      searchInput: '',
    }
  }

  componentDidMount() {
    this.props.fetchHomePageListings();
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

  render() {
    const { listings, filters } = this.props;
    if (listings.length < 2) {
      return (
        <div></div>
      )
    } else {
      return (
        <div>
          <main className="main-header">
            <section className="row left">
              <h2>Adventure is waiting.</h2>
              <div className="subtext">
                <h1>Search, discover and book over <strong>25</strong> campsites, ranches, vineyards, farms, public parks and more.</h1>
              </div>
              <div className="main-search-box">
                <div className="location-search">
                <input
                  id="pac-input"
                  className="controls"
                  type="text"
                  placeholder="Find camping near..."
                  onChange={this.handleInput()}
                  onKeyPress={this.handleEnter()}
                  value={this.state.searchInput}/>
                  <i className="fa fa-search"></i>
                </div>
                <div className="dates-search">
                  <input type="text" name="check-in-date"
                   className="datepicker" placeholder="Check In"/>
                  <input type="text" name="check-out-date"
                   className="datepicker" placeholder="Check Out"/ >
                  <div className="search-button">
                    Search
                  </div>
                </div>
              </div>
              <div className="search-subtext">
                <p className="discover-subtext">
                  <Link to="/explore"> 
                    or Discover the best camps near me           <i className="fa fa-long-arrow-right"></i>
                  </Link>
                </p>
              </div>
            </section>
            <section className="row right"><Link to={`/listings/${listings[0].id}`}>
              <img src='http://res.cloudinary.com/deor0br3s/image/upload/v1522783893/glacier_national_park.jpg'/>
              <p className="main-header-image-footer">
                <strong>Glacier National Park</strong> hosted by U.S. National Park Service
              </p></Link>
            </section>
          </main>
          <section className="discover-filters">
            <h2>Discover camping...</h2>
            <section className="discover-grid">

              <div className="discover-square">
                <div className="crop">
                  <Link to={`/explore`} onClick={() => this.props.receivePricingFilter(25)}>
                    <img src="http://res.cloudinary.com/deor0br3s/image/upload/v1522898892/tent_cropped.jpg"/>
                  </Link>
                </div>
                <footer className="discover-footer">
                  <Link to={`/explore`} onClick={() => this.props.receivePricingFilter(25)}>
                    <h2>Camping under $25</h2>
                    <p>Best options near me</p>
                  </Link>
                </footer>
              </div>

              <div className="discover-square">
                <div className="crop">
                  <Link to={`/explore`} onClick={() => this.props.receiveSingleFilter('glamping')}>
                    <img src="http://res.cloudinary.com/deor0br3s/image/upload/v1522898891/glamping_cropped.jpg"/>
                  </Link>
                </div>
                <footer className="discover-footer">
                  <Link to={`/explore`} onClick={() => this.props.receiveSingleFilter('glamping')}>
                    <h2>Glamping</h2>
                    <p>Best options near me</p>
                  </Link>
                </footer>
              </div>

              <div className="discover-square">
                <div className="crop">
                  <Link to={`/explore`} onClick={() => this.props.receiveSingleFilter('pets')}>
                    <img src="http://res.cloudinary.com/deor0br3s/image/upload/v1522898896/dogs_woods_cropped.jpg"/>
                  </Link>
                </div>
                <footer className="discover-footer">
                  <Link to={`/explore`} onClick={() => this.props.receiveSingleFilter('pets')}>
                    <h2>Pet friendly camping</h2>
                    <p>Best options near me</p>
                  </Link>
                </footer>
              </div>

              <div className="discover-square">
                <div className="crop">
                  <Link to={`/listings/${listings[3].id}`}>
                    <img src="http://res.cloudinary.com/deor0br3s/image/upload/v1522898903/Zion_National_Park.jpg"/>
                  </Link>
                </div>
                <footer className="discover-footer">
                  <Link to={`/listings/${listings[3].id}`}>
                    <h2>Zion</h2>
                    <p>Utah</p>
                  </Link>
                </footer>
              </div>

              <div className="discover-square">
                <div className="crop">
                  <Link to={`/listings/${listings[4].id}`}>
                    <img src={listings[4].iconUrl}/>
                  </Link>
                </div>
                <footer className="discover-footer">
                  <Link to={`/listings/${listings[4].id}`}>
                    <h2>{listings[4].title}</h2>
                    <p>California</p>
                  </Link>
                </footer>
              </div>

              <div className="discover-square">
                <div className="crop">
                  <Link to={`/listings/${listings[0].id}`}>
                    <img src="http://res.cloudinary.com/deor0br3s/image/upload/v1522898891/glacier_lake_cropped.jpg"/>
                  </Link>
                </div>
                <div className="discover-footer">
                  <Link to={`/listings/${listings[0].id}`}>
                    <h2>Glacier National Park</h2>
                    <p>Montana</p>
                  </Link>
                </div>
              </div>

              <div className="discover-square">
                <div className="crop">
                  <Link to={`/listings/${listings[5].id}`}>
                    <img src="http://res.cloudinary.com/deor0br3s/image/upload/v1522899727/yosemite_cropped.jpg"/>
                  </Link>
                </div>
                <footer className="discover-footer">
                  <Link to={`/listings/${listings[5].id}`}>
                    <h2>Yosemite</h2>
                    <p>California</p>
                  </Link>
                </footer>
              </div>

              <div className="discover-square">
                <div className="crop">
                  <Link to={`/listings/${listings[2].id}`}>
                    <img src="http://res.cloudinary.com/deor0br3s/image/upload/v1522898893/joshua_tree_cropped.jpg"/>
                  </Link>
                </div>
                <footer className="discover-footer">
                  <Link to={`/listings/${listings[2].id}`}>
                    <h2>Joshua Tree</h2>
                    <p>California</p>
                  </Link>
                </footer>
              </div>

              <div className="discover-square">
                <div className="crop">
                  <Link to={`/listings/${listings[1].id}`}>
                    <img src="http://res.cloudinary.com/deor0br3s/image/upload/v1522899844/yellowstone_cropped.jpg"/>
                  </Link>
                </div>
                <footer className="discover-footer">
                  <Link to={`/listings/${listings[1].id}`}>
                    <h2>Yellowstone</h2>
                    <p>Wyoming</p>
                  </Link>
                </footer>
              </div>
            </section>
          </section>
        </div>
      )
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    listings: Object.values(state.entities.listings),
    filters: state.ui.filters,
  }
}


const mapDispatchToProps = dispatch => {
  return {
    fetchHomePageListings: () => dispatch(fetchHomePageListings()),
    receiveSingleFilter: filter => dispatch(receiveSingleFilter(filter)),
    receivePricingFilter: amount => dispatch(receivePricingFilter(amount)),
    receiveGeolocationEntry: entry => dispatch(receiveGeolocationEntry(entry)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeMain);
