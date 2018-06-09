import {
  RECEIVE_SINGLE_LISTING
} from '../actions/listing_actions';

import {
  LOCATION_CHANGE
} from 'react-router-redux';

const ListingPhotosReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SINGLE_LISTING:
      return action.payload.listingPhotos;
    case LOCATION_CHANGE:
      return {};
    default:
      return state;
  }
};


export default ListingPhotosReducer;
