import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReviewForm from './review_form';
import { createReview } from '../../actions/review_actions';
import { fetchSingleListing } from '../../actions/listing_actions';

const msp = (state, ownProps) => {
  const currentUser = state.session.currentUser;
  const listingId = parseInt(ownProps.match.params.listingId);
  const review = { userId: currentUser.id, listingId: listingId, body: '' };
  const formType = 'Add Review';

  return {
    review,
    formType,
    currentUser,
  };
};

const mdp = dispatch => ({
  action: review => dispatch(createReview(review)),
  fetchSingleListing: id => dispatch(fetchSingleListing(id)),

});

export default connect(msp, mdp)(ReviewForm);
