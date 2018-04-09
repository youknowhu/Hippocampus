export const fetchBooking = id => (
  $.ajax({
    method: 'GET',
    url: `/api/bookings/${id}`,
  })
);

export const createBooking = bookingParams => (
  $.ajax({
    url: `api/bookings`,
    method: 'POST',
    data: {
      booking: {
        guest_id: bookingParams.guestId,
    		listing_id: bookingParams.listingId,
    		num_guests: bookingParams.numGuests,
    		check_in: bookingParams.checkIn,
    		check_out: bookingParams.checkOut,
      },
    },
  })
);


export const deleteBooking = id => (
  $.ajax({
    url: `/api/bookings/${id}`,
    method: 'DELETE',
  })
);
