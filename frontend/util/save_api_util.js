export const createSave = saveParams => (
  $.ajax({
    method: 'POST',
    url: `/api/saves/`,
    data: {
      save: {
        user_id: saveParams.userId,
        listing_id: saveParams.listingId,
      }
    }
  })
);

export const deleteSave = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/saves/${id}`,
  })
);
