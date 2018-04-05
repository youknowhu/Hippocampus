import * as APIUtil from '../util/user_api_util';

export const RECEIVE_SINGLE_LISTING = 'RECEIVE_SINGLE_LISTING';

const receiveSingleListing = host => ({
  type: RECEIVE_SINGLE_LISTING,
  host,
});

export const fetchHost = id => dispatch => (
  APIUtil.fetchUser(id).then(host => dispatch(receiveSingleListing(host)))
);
