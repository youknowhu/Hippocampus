export const fetchReview = id => (
  $.ajax({
    method: 'GET',
    url: `/api/reviews/${id}`,
  })
);

export const createReview = reviewParams => (
  $.ajax({
    method: 'POST',
    url: '/api/reviews',
    data: {
      review: {
        user_id: reviewParams.userId,
        listing_id: reviewParams.listingId,
        body: reviewParams.body,
      },
    },
  })
);

export const updateReview = reviewParams => (
  $.ajax({
    method: 'PATCH',
    url: `/api/reviews/${reviewParams.id}`,
    data: {
      review: {
        user_id: reviewParams.userId,
        listing_id: reviewParams.listingId,
        body: reviewParams.body,
      },
    },
  })
);


export const deleteReview = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/reviews/${id}`,
  })
);
