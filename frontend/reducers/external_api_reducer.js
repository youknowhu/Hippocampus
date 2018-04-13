import { RECEIVE_SINGLE_LISTING } from '../actions/listing_actions';

const ExternalAPIReducer = (state = [], action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_SINGLE_LISTING:
      return action.payload.external;
    default:
      return state;
  }
};


export default ExternalAPIReducer;
