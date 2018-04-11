import { RECEIVE_GEOLOCATION_ENTRY } from '../actions/geolocation_actions';

const filtersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_GEOLOCATION_ENTRY:
      return action.geolocation;
    default:
      return state;
  }
}

export default filtersReducer;
