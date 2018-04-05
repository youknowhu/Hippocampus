export const login = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user },
  })
);

export const signup = userParams => (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: {
      user: {
        username: userParams.username,
        password: userParams.password,
        first_name: userParams.firstName,
        last_name: userParams.lastName,
        img_url: userParams.imgUrl,
        zip: userParams.zip,
      },
    },
  })
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session',
  })
);
