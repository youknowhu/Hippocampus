import { connect } from 'react-redux';
import Listing from './listing'
import { fetchSingleListing } from '../../actions/listing_actions'
import { fetchElevation, fetchWeather } from '../../util/map_api_util'

const msp = (state, ownProps) => {
  const listing = state.entities.listings[ownProps.match.params.listingId] || {};
  const hostId = listing.hostId;
  const host = state.entities.users[hostId] || {}
  const numReviews = Object.keys(state.entities.reviews).length
  const currentUser = state.session.currentUser;

  return {
    listing,
    listingPhotos: Object.values(state.entities.listingPhotos),
    host,
    numReviews,
    currentUser
  };
};

const mdp = dispatch => ({
  fetchListing: id => dispatch(fetchSingleListing(id)),
  fetchElevation: latlng => fetchElevation(latlng),
  fetchWeather: (lat, lng) => fetchWeather(lat, lng),
});

export default connect(msp, mdp)(Listing);
