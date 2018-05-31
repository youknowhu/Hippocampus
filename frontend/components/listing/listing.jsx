import React from 'react';
import { Router, Route, Link } from 'react-router-dom';
import ListingSlider from './listing_slider.jsx';
import ReviewsIndexContainer from '../reviews/reviews_index_container';
import CreateReviewFormContainer from '../reviews/create_review_form_container';
import UpdateReviewFormContainer from '../reviews/update_review_form_container';
import BookingsFormContainer from '../bookings/bookings_form_container';
import SavesContainer from '../saves/saves_container';

class Listing extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      elevation: 0,
      weather: 'slightly cloudy',
      temperature: 65,
    }
  }

  componentWillReceiveProps(newProps) {
    if (this.props.listing.id != newProps.match.params.listingId) {
      this.props.fetchListing(newProps.match.params.listingId);
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchListing(this.props.match.params.listingId);
  }


  render() {
    if (this.props.listing.id === undefined) {
      return ( <div> </div> )
    }

    const { host, listing, external } = this.props;
    const listingType =
      listing.isPrivate ? 'Private' : 'Public';
    const accomodations =
      listing.isCamping ? 'Camping' : 'Glamping';
    const petFriendly =
      listing.allowsPets ? 'Yes' : 'No';
    const numReviews =
        this.props.numReviews ===  1 ?
          this.props.numReviews + " Review" :
          this.props.numReviews + " Reviews";

    return (
      <main className="listing-page">
        <ListingSlider
          photos={this.props.listingPhotos}/>
        <div className="listing-content">
          <section className="listing-left">
            <h1>{listing.title}</h1>
            <SavesContainer />

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
                    <strong>{listingType}</strong>
                  </li>
                  <li>Accomodations:
                    <strong>{accomodations}</strong>
                  </li>
                  <li>Allows Pets:
                    <strong>{petFriendly}</strong>
                  </li>
                  <li>Max Capacity:
                    <strong>{listing.maxCapacity}</strong>
                  </li>
                  <li>Check In After:
                    <strong>{listing.checkInAfter}</strong>
                  </li>
                  <li>Check Out Before:
                    <strong>{listing.checkOutBefore}</strong>
                  </li>
                  <li>Daily Cost:
                    <strong>${listing.dailyCost}</strong>
                  </li>
                </ul>
              </main>
            </div>
            <div className="listing-features">
              <aside>
                <p>Features & Activities</p>
              </aside>
              <main>
                <ul>
                  <li>
                    <img src="https://res.cloudinary.com/deor0br3s/image/upload/v1523117615/Icons/ic_terrain_black_24px.svg" />
                    <p> Mountainous Terrain </p>
                  </li>
                  <li>
                    <img src="https://res.cloudinary.com/deor0br3s/image/upload/v1523118475/ic_directions_walk_black_24px.svg" />
                    <p> Hiking Trails </p>
                  </li>
                  <li>
                    <img src="https://res.cloudinary.com/deor0br3s/image/upload/v1523117612/Icons/ic_directions_bike_black_24px.svg" />
                    <p> Bike Trails </p>
                  </li>
                  <li>
                    <img src="https://res.cloudinary.com/deor0br3s/image/upload/v1523117612/Icons/ic_beach_access_black_24px.svg" />
                    <p> Beach Access </p>
                  </li>
                  <li>
                    <img src="https://res.cloudinary.com/deor0br3s/image/upload/v1523117615/Icons/ic_rowing_black_24px.svg" />
                    <p> Rowing </p>
                  </li>

                </ul>
              </main>
            </div>
            <div className="listing-vibe">
              <h2> The vibe at {listing.title} </h2>
              <div className='vibe-squares'>
                <div className="vibe-square">
                  <h3>{Math.round(external.elevation * 3.28)}ft</h3>
                  <p>elevation</p>
                </div>
                <div className="vibe-square">
                  <h3>{external.weather}</h3>
                  <p>current conditions</p>
                </div>
                <div className="vibe-square">
                  <h3>{ Math.round(external.temp) }°F</h3>
                  <p>temperature</p>
                </div>
              </div>
            </div>

            <div className="reviews-section">
              <div className="reviews-header">
                <p>
                  <strong>{numReviews}</strong>
                </p>
                <span>
                  {
                    this.props.currentUser === null ? <div> </div> :
                    <Link to={`/listings/${listing.id}/reviews/new`}>
                      Add Review
                    </Link>
                  }
                </span>
              </div>
              <Route exact path="/listings/:listingId/reviews/new"
                component={CreateReviewFormContainer} />
              <Route exact path="/listings/:listingId/reviews/:reviewId/edit"
                component={UpdateReviewFormContainer} />
              <ReviewsIndexContainer />
            </div>
          </section>
          <section className="listing-right">
            <BookingsFormContainer />
          </section>
        </div>
      </main >
    )
  }
}

export default Listing;
