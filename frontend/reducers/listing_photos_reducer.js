import {
  RECEIVE_SINGLE_LISTING,
  CLEAR_LISTING
} from '../actions/listing_actions';

import {
  LOCATION_CHANGE
} from 'connected-react-router';

const ListingPhotosReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SINGLE_LISTING:
      return action.payload.listingPhotos;
    case CLEAR_LISTING:
      return {};
    default:
      return state;
  }
};


export default ListingPhotosReducer;
