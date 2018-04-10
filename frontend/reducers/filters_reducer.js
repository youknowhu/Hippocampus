import merge from 'lodash/merge';
import { RECEIVE_SINGLE_FILTER, REMOVE_SINGLE_FILTER,
  CLEAR_ALL_FILTERS, RECEIVE_PRICING_FILTER, REMOVE_PRICING_FILTER
  } from '../actions/filter_actions';

const defaultFilters = {
  pets: false,
  camping: false,
  glamping: false,
  group: false,
  pricing: 10000,
  biking: false,
  hiking: false,
  water: false,
  forest: false,
  waterfall: false,
  lake: false,
}


const filtersReducer = (state = defaultFilters, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_SINGLE_FILTER:
      newState = merge({}, state, { [action.filter]: true })
      return newState;
    case REMOVE_SINGLE_FILTER:
      newState = merge({}, state, { [action.filter]: false })
      return newState;
    case RECEIVE_PRICING_FILTER:
      newState = merge({}, state, { pricing: action.amount })
      return newState;
    case REMOVE_PRICING_FILTER:
      newState = merge({}, state, { pricing: 10000 })
      return newState;
    case CLEAR_ALL_FILTERS:
      return defaultFilters;
    default:
      return state;
  }
}

export default filtersReducer;
