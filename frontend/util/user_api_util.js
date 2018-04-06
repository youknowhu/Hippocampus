export const fetchSingleUser = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${id}`,
  })
);

export const fetchAllUsers = () => (
  $.ajax({
    method: 'GET',
    url: `/api/users`,
  })
);
