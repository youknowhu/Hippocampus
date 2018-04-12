import { combineReducers } from 'redux';

import filters from './filters_reducer';
import geo from './geolocation_reducer';
import dates from './dates_reducer';

export default combineReducers({
  filters, geo, dates
});
