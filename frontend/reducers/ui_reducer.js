import { combineReducers } from 'redux';

import filters from './filters_reducer';
import geolocation from './geolocation_reducer';

export default combineReducers({
  filters, geolocation
});
