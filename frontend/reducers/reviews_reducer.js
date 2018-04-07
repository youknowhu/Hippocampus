import merge from 'lodash/merge';
import { RECEIVE_SINGLE_LISTING } from '../actions/listing_actions';
import { RECEIVE_REVIEW, REMOVE_REVIEW, RECEIVE_REVIEWS } from '../actions/review_actions';

const ReviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_SINGLE_LISTING:
      return action.payload.reviews;
    case RECEIVE_REVIEW:
      newState = merge({}, state, { [action.review.id]: action.review });
      return newState;
    case REMOVE_REVIEW:
      newState = merge({}, state);
      delete newState[action.reviewId];
      return newState;
    default:
      return state;
  }
};


export default ReviewsReducer;
