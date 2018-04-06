import * as APIUtil from '../util/review_api_util';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review,
});


const removeReview = reviewId => ({
  type: REMOVE_REVIEW,
  reviewId,
});

export const fetchReview = reviewId => dispatch =>  (
  APIUtil.fetchReview(reviewId).then(
    review => dispatch(receiveReview(review))
  )
);

export const createReview = formReview => dispatch =>  (
  APIUtil.createReview(formReview).then(
    review => dispatch(receiveReview(review))
  )
);

export const updateReview = formReview => dispatch => (
  APIUtil.updateReview(formReview).then(
    review => dispatch(receiveReview(review))
  )
);
export const deleteReview = reviewId => dispatch => (
  APIUtil.deleteReview(reviewId).then(
    review => dispatch(removeReview(reviewId))
  )
);
