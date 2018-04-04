import { combineReducers } from 'redux';
import users from './users_reducer';
import listings from './listings_reducer';
import listing_photos from './listing_photos_reducer';

export default combineReducers({
  users, listings, listing_photos
});
