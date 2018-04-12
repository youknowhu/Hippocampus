import { combineReducers } from 'redux';

import filters from './filters_reducer';
import geo from './geolocation_reducer';

export default combineReducers({
  filters, geo
});
