import { connect } from 'react-redux';
import BookingsForm from './bookings_form';
import { fetchSingleListing } from '../../actions/listing_actions';
import { createBooking, deleteBooking, clearBookingErrors } from '../../actions/booking_actions'
import { loadModal } from '../../actions/modal_actions';

const msp = (state) => {
  const bookings =  state.entities.bookings || {};
  const listing =  Object.values(state.entities.listings)[0];
  const currentUser = state.session.currentUser || {};
  const currentUserBookings = state.entities.currentUserBookings;
  const errors = state.errors.bookingErrors;
  const searchDates = state.ui.dates;

  return {
    bookings, listing, currentUser, currentUserBookings, errors, searchDates,
  }
}

const mdp = dispatch => ({
  fetchSingleListing: id => dispatch(fetchSingleListing(id)),
  deleteBooking: id => dispatch(deleteBooking(id)),
  createBooking: booking => dispatch(createBooking(booking)),
  clearBookingErrors: () => dispatch(clearBookingErrors()),
  loadModal: modalType => dispatch(loadModal(modalType)),
});


export default connect(msp, mdp)(BookingsForm)
