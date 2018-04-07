import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReviewForm from './review_form';
import { fetchReview, updateReview } from '../../actions/review_actions';
import { fetchSingleListing } from '../../actions/listing_actions';

const msp = (state, ownProps) => {
  const currentUser = state.session.currentUser;
  const review = state.entities.reviews[ownProps.match.params.reviewId] || {};
  const formType = 'Update Review';

  return {
    review,
    formType,
    currentUser,
  };
};

const mdp = dispatch => ({
  action: review => dispatch(updateReview(review)),
  fetchReview: id => dispatch(fetchReview(id)),
  fetchSingleListing: id => dispatch(fetchSingleListing(id)),
});

class UpdateReviewForm extends React.Component {
  componentDidMount() {
    this.props.fetchReview(this.props.match.params.reviewId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.review.id != nextProps.match.params.reviewId) {
      this.props.fetchReview(nextProps.match.params.reviewId);
    }
  }

  render() {
    const { action, formType, review, currentUser, fetchSingleListing } = this.props;
    return (
      <ReviewForm
        action={action}
        formType={formType}
        review={review}
        currentUser={currentUser}
        fetchSingleListing={fetchSingleListing} />
    );
  }
}


export default connect(msp, mdp)(UpdateReviewForm);
