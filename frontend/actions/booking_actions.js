import * as APIUtil from '../util/booking_api_util';

export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';
export const REMOVE_BOOKING = 'REMOVE_BOOKING';
export const RECEIVE_BOOKING_ERRORS = 'RECEIVE_BOOKING_ERRORS';
export const CLEAR_BOOKING_ERRORS = 'CLEAR_BOOKING_ERRORS';


const receiveBooking = booking => ({
  type: RECEIVE_BOOKING,
  booking,
});

const removeBooking = bookingId => ({
  type: REMOVE_BOOKING,
  bookingId,
});

export const receiveBookingErrors = errors => ({
  type: RECEIVE_BOOKING_ERRORS,
  errors,
});

export const clearBookingErrors = () => ({
  type: CLEAR_BOOKING_ERRORS,
});


export const fetchBooking = bookingId => dispatch => (
  APIUtil.fetchBooking(bookingId).then(
    booking => dispatch(receiveBooking(booking))
  )
);

export const createBooking = formBooking => dispatch => (
  APIUtil.createBooking(formBooking).then(booking => (
    dispatch(receiveBooking(booking))
  ), err => (
    dispatch(receiveBookingErrors(err.responseJSON))
  ))
);

export const deleteBooking = bookingId => dispatch => (
  APIUtil.deleteBooking(bookingId).then(
    booking => dispatch(removeBooking(bookingId))
  )
);
