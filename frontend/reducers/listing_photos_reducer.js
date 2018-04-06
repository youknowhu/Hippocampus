import { RECEIVE_SINGLE_LISTING }
  from '../actions/listing_actions';

const ListingPhotosReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SINGLE_LISTING:
      return action.payload.listingPhotos;
    default:
      return state;
  }
};


export default ListingPhotosReducer;
