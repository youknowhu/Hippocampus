import {
  connect
} from 'react-redux';
import Listing from './listing'
import {
  fetchSingleListing,
  clearListing
} from '../../actions/listing_actions'

const msp = (state, ownProps) => {
  const listing = state.entities.listings[ownProps.match.params.listingId] || {};
  const hostId = listing.hostId;
  const host = state.entities.users[hostId] || {};
  const numReviews = state.entities.sortedReviews.length;
  const currentUser = state.session.currentUser;
  const external = state.entities.external;

  return {
    listing,
    listingPhotos: Object.values(state.entities.listingPhotos),
    host,
    numReviews,
    currentUser,
    external
  };
};

const mdp = dispatch => ({
  fetchListing: id => dispatch(fetchSingleListing(id)),
  clearListing: () => dispatch(clearListing())
});

export default connect(msp, mdp)(Listing);
