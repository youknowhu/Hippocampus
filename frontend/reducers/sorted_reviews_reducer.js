import merge from 'lodash/merge';
import { RECEIVE_SINGLE_LISTING } from '../actions/listing_actions';

const SortedReviewsReducer = (state = [], action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_SINGLE_LISTING:
      return action.payload.sortedReviews;
    default:
      return state;
  }
};


export default SortedReviewsReducer;
