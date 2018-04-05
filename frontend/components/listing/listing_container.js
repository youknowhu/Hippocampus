import { connect } from 'react-redux';
import Listing from './listing'
import { fetchSingleListing } from '../../actions/listing_actions'

const msp = (state, ownProps) => {
  const listing = state.entities.listings[ownProps.match.params.listingId] || {};
  const hostId = listing.hostId;
  const host = state.entities.users[hostId] || {}

  return {
    listing,
    listingPhotos: Object.values(state.entities.listingPhotos),
    host,
  };
};

const mdp = dispatch => ({
  fetchListing: id => dispatch(fetchSingleListing(id)),
});

export default connect(msp, mdp)(Listing)
