import merge from 'lodash/merge';
import { RECEIVE_SINGLE_LISTING } from '../actions/listing_actions';
import { RECEIVE_BOOKING, REMOVE_BOOKING } from '../actions/review_actions';

const BookingsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_SINGLE_LISTING:
      return action.payload.bookings;
    case RECEIVE_BOOKING:
      newState = merge({}, state, { [action.booking.id]: action.booking });
      return newState;
    case REMOVE_BOOKING:
      newState = merge({}, state);
      delete newState[action.bookingId];
      return newState;
    default:
      return state;
  }
};

export default BookingsReducer;
