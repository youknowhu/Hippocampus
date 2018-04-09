import { combineReducers } from 'redux';
import users from './users_reducer';
import listings from './listings_reducer';
import listingPhotos from './listing_photos_reducer';
import reviews from './reviews_reducer';
import sortedReviews from './sorted_reviews_reducer';
import bookings from './bookings_reducer';
import currentUserBookings from './current_user_bookings_reducer';

export default combineReducers({
  users, listings, listingPhotos, reviews, sortedReviews, bookings, currentUserBookings,
});
