import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { receiveSingleFilter, receivePricingFilter, clearAllFilters } from '../actions/filter_actions';
import { fetchHomePageListings } from '../actions/listing_actions';
import { receiveGeolocationEntry } from '../actions/geolocation_actions';
import { receiveSearchDates } from '../actions/dates_actions';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import DayPicker from 'react-day-picker';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import DateFormat from 'dateformat';

class HomeMain extends React.Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);

    this.state = {
      searchInput: '',
      checkIn: '',
      checkOut: '',
    }

    this.handleDayChange = this.handleDayChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0,0)
    this.props.fetchHomePageListings();
  }


  handleDayChange(dateParam) {
    return day => {
      this.setState({ [dateParam]: day });
    };
  }


  handleInput() {
    return e => {
      this.setState({ searchInput: e.target.value}, this.handleEnter)
    }
  }

  handleSingleFilter(category) {
    return e => {
      this.props.clearAllFilters();
      this.props.receiveSingleFilter(category);
      this.props.history.push('/explore')
    }
  }

  handlePricingFilter(amount) {
    return e => {
      this.props.clearAllFilters();
      this.props.receivePricingFilter(amount);
      this.props.history.push('/explore');
    }
  }


  handleSearch() {
    this.props.receiveGeolocationEntry(this.state.searchInput);
    this.props.receiveSearchDates({ checkIn: this.state.checkIn,
      checkOut: this.state.checkOut })
    this.props.history.push('/explore');
  }

  render() {
    const { listings, filters } = this.props;
    if (listings.length < 2) {
      return (
        <div id="loading-main"></div>
      )
    } else {

      const dateSettings = {
        clickUnselectsDay: true,
        format: 'M/D/YYYY',
        formatDate: format,
        parseDate: parse,
        dayPickerProps:{ disabledDays: {before: new Date(Date.now() + 86400000)}}
      }

      const startModifier = {
        selectedStart: this.state.checkIn,
      }

      const endModifier = {
        selectedEnd: this.state.checkOut,
      }

      return (
        <div>
          <main className="main-header">
            <section className="row left">
              <h2>Adventure is waiting.</h2>
              <div className="subtext">
                <h1>Search, explore and book from <strong>15</strong> campsites, glampsites, and more.
                  <Link to="/explore">
                    Explore listings <i className="fa fa-long-arrow-right"></i>
                  </Link>
                </h1>
              </div>
              <div className="search-subtext">

              </div>
              <div className="main-search-box">
                <div className="location-search">
                <input
                  className="controls"
                  type="text"
                  placeholder="Find camping near..."
                  onChange={this.handleInput()}
                  value={this.state.searchInput}/>
                  <i className="fa fa-search"></i>
                </div>
                <div className="dates-search">
                  <div className="booking-field-date">
                    <DayPickerInput
                      {...dateSettings}
                      value={this.state.checkIn}
                      onDayChange={this.handleDayChange('checkIn')}
                      placeholder='Check In'
                      dayPickerProps={ {
                        disabledDays: [
                          { before: new Date(Date.now() + 86400000)},
                          { after: new Date(this.state.checkOut) }],
                        selectedDays: this.state.checkOut,
                      }}
                      />
                  </div>
                  <div className="booking-field-date checkout">
                    <DayPickerInput
                      {...dateSettings}
                      value={this.state.checkOut}
                      onDayChange={this.handleDayChange('checkOut')}
                      placeholder='Check Out'
                      dayPickerProps={ {
                        disabledDays:
                          { before: new Date(this.state.checkIn) },
                        selectedDays: this.state.checkIn,
                      }}
                    />
                  </div>
                  <button onClick={this.handleSearch}> Search
                  </button>
                </div>
              </div>
            </section>
            <section className="row right"><Link to={`/listings/${listings[0].id}`}>
              <img src='https://res.cloudinary.com/deor0br3s/image/upload/v1522783893/glacier_national_park.jpg'/>
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
                  <img onClick={this.handlePricingFilter(25)}
                  src="https://res.cloudinary.com/deor0br3s/image/upload/v1522898892/tent_cropped.jpg"/>
                </div>
                <footer className="discover-footer">
                  <a onClick={this.handlePricingFilter(25)}>
                    <h2>Camping under $25</h2>
                    <p>Best options near me</p>
                  </a>
                </footer>
              </div>

              <div className="discover-square">
                <div className="crop">
                    <img onClick={this.handleSingleFilter('glamping')} src="https://res.cloudinary.com/deor0br3s/image/upload/v1522898891/glamping_cropped.jpg"/>
                </div>
                <footer className="discover-footer">
                  <a onClick={this.handleSingleFilter('glamping')}>
                    <h2>Glamping</h2>
                    <p>Best options near me</p>
                  </a>
                </footer>
              </div>

              <div className="discover-square">
                <div className="crop">
                  <img onClick={this.handleSingleFilter('pets')} src="https://res.cloudinary.com/deor0br3s/image/upload/v1522898896/dogs_woods_cropped.jpg"/>
                </div>
                <footer className="discover-footer">
                  <a onClick={this.handleSingleFilter('pets')}>
                    <h2>Pet friendly camping</h2>
                    <p>Best options near me</p>
                  </a>
                </footer>
              </div>

              <div className="discover-square">
                <div className="crop">
                  <Link to={`/listings/${listings[3].id}`}>
                    <img src="https://res.cloudinary.com/deor0br3s/image/upload/v1522898903/Zion_National_Park.jpg"/>
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
                    <img src="https://res.cloudinary.com/deor0br3s/image/upload/v1522898891/glacier_lake_cropped.jpg"/>
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
                    <img src="https://res.cloudinary.com/deor0br3s/image/upload/v1522899727/yosemite_cropped.jpg"/>
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
                    <img src="https://res.cloudinary.com/deor0br3s/image/upload/v1522898893/joshua_tree_cropped.jpg"/>
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
                    <img src="https://res.cloudinary.com/deor0br3s/image/upload/v1522899844/yellowstone_cropped.jpg"/>
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
    clearAllFilters: () =>  dispatch(clearAllFilters()),
    receivePricingFilter: amount => dispatch(receivePricingFilter(amount)),
    receiveGeolocationEntry: entry => dispatch(receiveGeolocationEntry(entry)),
    receiveSearchDates: dates => dispatch(receiveSearchDates(dates)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeMain);
