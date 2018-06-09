import merge from 'lodash/merge';

import {
  RECEIVE_SINGLE_LISTING,
  CLEAR_LISTING
 } from '../actions/listing_actions';

import {
  REMOVE_REVIEW
} from '../actions/review_actions';

const SortedReviewsReducer = (state = [], action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_SINGLE_LISTING:
      return action.payload.sortedReviews;
    case CLEAR_LISTING:
      return [];
    case REMOVE_REVIEW:
      newState = state.filter(id => id !== action.reviewId);
      return newState;
    default:
      return state;
  }
};


export default SortedReviewsReducer;
