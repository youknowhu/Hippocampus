import merge from 'lodash/merge';
import {
  RECEIVE_ALL_USERS
}
  from '../actions/user_actions';

const UsersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_ALL_USERS:
      newState = merge({}, state, action.payload.users);
      return newState;
    default:
      return state;
  }
};


export default UsersReducer;
