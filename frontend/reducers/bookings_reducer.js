import merge from 'lodash/merge';

import {
  RECEIVE_SINGLE_LISTING,
  CLEAR_LISTING
} from '../actions/listing_actions';

import {
  RECEIVE_BOOKING,
  REMOVE_BOOKING
} from '../actions/booking_actions';

const BookingsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_SINGLE_LISTING:
      newState = merge({}, action.payload.bookings);
      return newState;
    case CLEAR_LISTING:
      return {};
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
