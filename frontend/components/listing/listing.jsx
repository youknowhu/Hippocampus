import React from 'react';
import { Router, Route } from 'react-router-dom';
import ListingSlider from './listing_slider.jsx';
import ReviewsIndex from '../reviews/reviews_index';
import Bookings from '../bookings/bookings';
// import ReviewForm from '../reviews/review_form';

class Listing extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      elevation: 0,
      weather: null,
      temperature: null,
    }

    this.getElevation = this.getElevation.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.listing.id != newProps.match.params.listingId) {
      this.props.fetchListing(newProps.match.params.listingId)
        .then(() => this.getElevation())
        .then(() => this.getWeather())
    }
  }


  componentDidMount() {
    this.props.fetchListing(this.props.match.params.listingId);
  }

  getElevation() {
    const { listing } = this.props;
    const latlng = listing.lat.toString() + "," + listing.lng.toString();
    this.props.fetchElevation(latlng)
      .then(resp =>
        this.setState({elevation: resp.results[0].elevation }));
  }

  getWeather() {
    const { listing } = this.props;
    this.props.fetchWeather(listing.lat, listing.lng)
      .then(resp => this.setState({weather: resp.weather[0].description}))
    this.props.fetchWeather(listing.lat, listing.lng)
      .then(resp => this.setState({temperature: resp.main.temp}))
  }

  render() {
    if (this.props.listing.id === undefined) {
      return (
        <div> </div>
      )
    } else {
      const { host, listing } = this.props;
      const listingType =
        listing.isPrivate ? 'Private' : 'Public';
      const accomodations =
        listing.isCamping ? 'Camping' : 'Glamping';
      const petFriendly =
        listing.allowsPets ? 'Yes' : 'No';

      return (
        <main className="listing-page">
          <ListingSlider photos={this.props.listingPhotos}/>
          <div className="listing-content">
            <section className="listing-left">
              <h1>{listing.title}</h1>

              <div className="listing-about">
                <aside>
                  <img src={host.imgUrl}/>
                  <div className="host-info">
                    <h3> Hosted by </h3>
                    <p>{host.firstName}</p>
                  </div>
                </aside>
                <main>
                  <p>{listing.body}</p>
                </main>
              </div>

              <div className="listing-details">
                <aside>
                  <p>Details</p>
                </aside>
                <main>
                  <ul>
                    <li>Listing Type:
                      <strong> {listingType}</strong>
                    </li>
                    <li>Accomodations:
                      <strong> {accomodations}</strong>
                    </li>
                    <li>Allows Pets:
                      <strong> {petFriendly}</strong>
                    </li>
                    <li>Max Capacity:
                      <strong> {listing.maxCapacity}</strong>
                    </li>
                    <li>Check In After:
                      <strong> {listing.checkInAfter}</strong>
                    </li>
                    <li>Check Out Before:
                      <strong> {listing.checkOutBefore}</strong>
                    </li>
                    <li>Daily Cost:
                      <strong> ${listing.dailyCost}</strong>
                    </li>
                  </ul>
                </main>
              </div>
              <div className="listing-vibe">
                <h2> The vibe at {listing.title} </h2>
                <div className='vibe-squares'>
                  <div className="vibe-square">
                    <h3>{Math.round(this.state.elevation * 3.28)}ft</h3>
                    <p>elevation</p>
                  </div>
                  <div className="vibe-square">
                    <h3>{this.state.weather}</h3>
                    <p>current conditions</p>
                  </div>
                  <div className="vibe-square">
                    <h3>{Math.round(this.state.temperature)}°F</h3>
                    <p>temperature</p>
                  </div>
                </div>
              </div>
              <div>
                <ReviewsIndex
                  listing={listing}
                />
              </div>
            </section>
            <section className="listing-right">
              <button>Book Site</button>
            </section>
          </div>
        </main >
      )
    }
  }
}

export default Listing;
