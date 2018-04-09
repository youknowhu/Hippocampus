import { connect } from 'react-redux';
import BookingsForm from './bookings_form';
import { fetchSingleListing } from '../../actions/listing_actions';
import { createBooking, deleteBooking } from '../../actions/booking_actions'

const msp = (state) => {
  const bookings =  state.entities.bookings || {};
  const listing =  Object.values(state.entities.listings)[0];
  const currentUser = state.session.currentUser || {};
  const currentUserBookings = state.entities.currentUserBookings;
  const booking = {
    guestId: currentUser.id, listingId: listing.id,
    numGuests: 1, startDate: '', endDate: ''
  };

  return {
    bookings, listing, currentUser, booking, currentUserBookings,
  }
}


const mdp = dispatch => ({
  fetchSingleListing: id => dispatch(fetchSingleListing(id)),
  deleteBooking: id => dispatch(deleteBooking(id)),
  createBooking: booking => dispatch(createBooking(booking)),
});


export default connect(msp, mdp)(BookingsForm)
