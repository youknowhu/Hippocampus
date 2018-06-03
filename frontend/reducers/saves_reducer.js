import merge from 'lodash/merge';
import { RECEIVE_SINGLE_LISTING } from '../actions/listing_actions';
import { RECEIVE_SAVE, REMOVE_SAVE } from '../actions/save_actions';

const SavesReducer = (state = [], action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_SINGLE_LISTING:
      return action.payload.saveUsers;
    case RECEIVE_SAVE:
      newState = [...state, action.save.userId];
      return newState;
    case REMOVE_SAVE:
      newState = state.filter(id => id !== action.saveId);
      return newState;
    default:
      return state;
  }
};


export default SavesReducer;
