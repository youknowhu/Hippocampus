import merge from 'lodash/merge';
import {
  RECEIVE_SINGLE_LISTING,
  CLEAR_LISTING
} from '../actions/listing_actions';

import {
  RECEIVE_SAVE,
  REMOVE_SAVE
} from '../actions/save_actions';

const SavesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_SINGLE_LISTING:
      return action.payload.currentUserSave;
    case CLEAR_LISTING:
      return {};
    case RECEIVE_SAVE:
      return action.save;
    case REMOVE_SAVE:
      return {};
    default:
      return state;
  }
};

export default SavesReducer;
