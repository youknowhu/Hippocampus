import { connect } from 'react-redux';
import Listing from './listing'
import { fetchSingleListing } from '../../actions/listing_actions'
import { fetchElevation } from '../../util/map_api_util'

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
  fetchElevation: latlng => fetchElevation(latlng),
});

export default connect(msp, mdp)(Listing)
