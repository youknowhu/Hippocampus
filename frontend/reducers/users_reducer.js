import merge from 'lodash/merge';
import { RECEIVE_SINGLE_LISTING }
  from '../actions/listing_actions';

const UsersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_SINGLE_LISTING:
      newState = merge({}, state, action.payload.host);
      return newState;
    default:
      return state;
  }
};


export default UsersReducer;
