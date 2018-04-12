import merge from 'lodash/merge' ;
import { RECEIVE_GEOLOCATION_ENTRY, RECEIVE_MAP_BOUNDS } from '../actions/geolocation_actions';

const defaultState = {
  geolocation: {},
  mapBounds: {},
}

const geoReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_GEOLOCATION_ENTRY:
      newState = merge({}, state, {geolocation: action.geolocation})
      return newState
    case RECEIVE_MAP_BOUNDS:
      newState = merge({}, state, {mapBounds: action.mapBounds})
      return newState
    default:
      return state;
  }
}

export default geoReducer;
