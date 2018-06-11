import {
  RECEIVE_BOOKING_ERRORS,
  CLEAR_BOOKING_ERRORS
} from '../actions/booking_actions';

const BookingErrorsReducer  = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOOKING_ERRORS:
      return action.errors;
    case CLEAR_BOOKING_ERRORS:
      return [];
    default:
      return state;
  }
};

export default BookingErrorsReducer;
