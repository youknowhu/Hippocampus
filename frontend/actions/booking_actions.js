import * as APIUtil from '../util/booking_api_util';

export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';
export const REMOVE_BOOKING = 'REMOVE_BOOKING';


const receiveBooking = booking => ({
  type: RECEIVE_BOOKING,
  booking,
});

const removeBooking = bookingId => ({
  type: REMOVE_BOOKING,
  bookingId,
});

export const fetchBooking = bookingId => dispatch => (
  APIUtil.fetchBooking(bookingId).then(
    booking => dispatch(receiveBooking(booking))
  )
);

export const createBooking = formBooking => dispatch => (
  APIUtil.createBooking(formBooking).then(
    booking => dispatch(receiveBooking(booking))
  )
);

export const deleteBooking = bookingId => dispatch => (
  APIUtil.deleteBooking(bookingId).then(
    booking => dispatch(removeBooking(bookingId))
  )
);
