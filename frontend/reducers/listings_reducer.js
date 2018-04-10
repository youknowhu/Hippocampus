import merge from 'lodash/merge';
import { RECEIVE_ALL_LISTINGS, RECEIVE_SINGLE_LISTING }
  from '../actions/listing_actions';


const listingsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_LISTINGS:
      return action.payload.listings;
    case RECEIVE_SINGLE_LISTING:
      return action.payload.listings;
    default:
      return state;
  }
};


export default listingsReducer;
