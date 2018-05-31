export const createSave = saveParams => (
  $.ajax({
    method: 'POST',
    url: `/api/saves/`,
    data: {
      save: {
        user_id: saveParams.user_id,
        listing_id: saveParams.listing_id,
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
