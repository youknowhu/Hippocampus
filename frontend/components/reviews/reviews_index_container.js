import { connect } from 'react-redux';
import ReviewsIndex from './reviews_index';
import { fetchAllUsers } from '../../actions/user_actions';

const msp = state => ({
  reviews: Object.values(state.entities.reviews) || [],
  users: state.entities.users,
  listing: state.entities.listings,
});


const mdp = dispatch => ({
  fetchAllUsers: () => dispatch(fetchAllUsers()),
});


export default connect(msp, mdp)(ReviewsIndex);
