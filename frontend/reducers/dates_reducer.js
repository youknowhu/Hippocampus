import merge from 'lodash/merge' ;
import {
  RECEIVE_SEARCH_DATES
} from '../actions/dates_actions';

const defaultState = {
  checkIn: '',
  checkOut: '',
}

const datesReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_SEARCH_DATES:
      return action.dates;
    default:
      return state;
  }
}

export default datesReducer;
