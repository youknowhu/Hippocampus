import merge from 'lodash/merge';
import {
  RECEIVE_CURRENT_USER
} from '../actions/session_actions';

const _nullUser = Object.freeze({
  currentUser: null
});

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      newState = merge({}, { currentUser });
      return ((currentUser) ? newState : _nullUser);

    default:
      return state;
  }
};


export default sessionReducer;
