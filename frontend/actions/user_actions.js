import * as APIUtil from '../util/user_api_util';


export const RECEIVE_ALL_USERS = 'FETCH_ALL_USERS';

const receiveAllUsers = payload => ({
  type: RECEIVE_ALL_USERS,
  payload,
});


export const fetchAllUsers = () => dispatch => (
  APIUtil.fetchAllUsers().then(users => dispatch(receiveAllUsers(users)))
);
