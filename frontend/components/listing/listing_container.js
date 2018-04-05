import { connect } from 'react-redux';
import Listing from './listing'
import { fetchSingleListing } from '../../actions/listing_actions'

const msp = (state, ownProps) => ({
  listing: state.entities.listings.listings[ownProps.match.params.listingId],
  listingPhotos: Object.values(state.entities.listingPhotos),
});

const mdp = dispatch => ({
  fetchListing: id => dispatch(fetchSingleListing(id)),
});

export default connect(msp, mdp)(Listing)
