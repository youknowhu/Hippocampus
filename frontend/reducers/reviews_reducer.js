import { RECEIVE_SINGLE_LISTING }
  from '../actions/listing_actions';

const ReviewsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SINGLE_LISTING:
      return action.payload.reviews;
    default:
      return state;
  }
};


export default ReviewsReducer;
