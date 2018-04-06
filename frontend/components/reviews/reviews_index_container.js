import { connect } from 'react-redux';
import ReviewsIndex from './reviews_index';
import { fetchAllUsers } from '../../actions/user_actions';
import { deleteReview } from '../../actions/review_actions';

const msp = state => ({
  reviews: Object.values(state.entities.reviews) || [],
  users: state.entities.users,
  listing: state.entities.listings,
  currentUser: state.session.currentUser || {},
});


const mdp = dispatch => ({
  fetchAllUsers: () => dispatch(fetchAllUsers()),
  deleteReview: id => dispatch(deleteReview(id)),
});


export default connect(msp, mdp)(ReviewsIndex);
