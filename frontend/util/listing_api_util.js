export const fetchAllListings = () => (
  $.ajax({
    method: 'GET',
    url: '/api/listings',
  })
);

export const fetchSingleListing = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/listings/${id}`,
  })
);