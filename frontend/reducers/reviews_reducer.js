import merge from 'lodash/merge';
import {
  RECEIVE_SINGLE_LISTING,
  CLEAR_LISTING
 } from '../actions/listing_actions';
import {
  RECEIVE_REVIEW,
  REMOVE_REVIEW
} from '../actions/review_actions';

const ReviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_SINGLE_LISTING:
      newState = merge({}, action.payload.reviews);
      return newState;
    case CLEAR_LISTING:
      return {};
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
