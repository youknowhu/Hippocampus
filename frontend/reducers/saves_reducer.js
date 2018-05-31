import merge from 'lodash/merge';
import { RECEIVE_SINGLE_LISTING } from '../actions/listing_actions';
import { RECEIVE_SAVE, REMOVE_SAVE } from '../actions/saveactions';

const SavesReducer = (state = [], action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_SINGLE_LISTING:
      return action.payload.userSaves;
    case RECEIVE_SAVE:
      newState = [...state, action.save.user_id]
      return newState;
    case REMOVE_SAVE:
      newState = state.filter(id => id !== action.saveId);
      return newState;
    default:
      return state;
  }
};


export default SavesReducer;
