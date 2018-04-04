import { connect } from 'react-redux';
import Listing from './listing'
import { fetchSingleListing } from '../../actions/listing_actions'

const msp = (state, ownProps) => ({
  listing: state.listings
  listingPhotos: state.listingPhotos,
});

const mdp = dispatch => ({
  fetchListing: id => dispatch(fetchSingleListing(id)),
});

export default connect(msp, mdp)(Listing)
