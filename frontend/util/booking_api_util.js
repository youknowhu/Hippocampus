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
    		total_cost: bookingParams.totalCost,
    		start_date: bookingParams.startDate,
    		end_date: bookingParams.endDate,
      },
    },
  })
);

export const deleteBooking = id => (
  $.ajax({
    url: `/api/bookings/${id}`,
    method: 'DELETE',
  }),
);
