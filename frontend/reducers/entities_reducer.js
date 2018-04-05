import { combineReducers } from 'redux';
import users from './users_reducer';
import listings from './listings_reducer';
import listingPhotos from './listing_photos_reducer';
import reviews from './reviews_reducer'

export default combineReducers({
  users, listings, listingPhotos, reviews,
});
