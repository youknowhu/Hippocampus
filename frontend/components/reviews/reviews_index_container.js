import { connect } from 'react-redux';
import ReviewsIndex from './reviews_index';
import { fetchAllUsers } from '../../actions/user_actions';
import { deleteReview } from '../../actions/review_actions';
import { fetchSingleListing } from '../../actions/listing_actions';

const msp = state => ({
  reviews: state.entities.reviews || {},
  sortedReviews: state.entities.sortedReviews || [],
  users: state.entities.users,
  listing: state.entities.listings,
  currentUser: state.session.currentUser || {},
});


const mdp = dispatch => ({
  fetchAllUsers: () => dispatch(fetchAllUsers()),
  deleteReview: id => dispatch(deleteReview(id)),
  fetchSingleListing: id => dispatch(fetchSingleListing(id)),
});


export default connect(msp, mdp)(ReviewsIndex);
