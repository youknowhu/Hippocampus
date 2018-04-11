import merge from 'lodash/merge';
import { RECEIVE_ALL_LISTINGS, RECEIVE_SINGLE_LISTING, RECEIVE_HOME_PAGE_LISTINGS }
  from '../actions/listing_actions';


const listingsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_LISTINGS:
      return action.payload.listings;
    case RECEIVE_SINGLE_LISTING:
      return action.payload.listings;
    case RECEIVE_HOME_PAGE_LISTINGS:
      return action.payload;
    default:
      return state;
  }
};


export default listingsReducer;
