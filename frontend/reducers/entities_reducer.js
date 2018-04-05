import { combineReducers } from 'redux';
import users from './users_reducer';
import listings from './listings_reducer';
import listingPhotos from './listing_photos_reducer';

export default combineReducers({
  users, listings, listingPhotos,
});
