import merge from 'lodash/merge';

import {
  RECEIVE_SINGLE_LISTING,
  CLEAR_LISTING
 } from '../actions/listing_actions';

import {
  REMOVE_BOOKING
} from '../actions/booking_actions';

const CurrentUserBookings = (state = null, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_SINGLE_LISTING:
      return action.payload.currentUserBookings;
    case CLEAR_LISTING:
      return null;
    case REMOVE_BOOKING:
      return null;
    default:
      return state;
  }
};


export default CurrentUserBookings;
