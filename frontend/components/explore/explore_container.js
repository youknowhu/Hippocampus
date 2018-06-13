import { connect } from 'react-redux';
import Explore from './explore';
import { fetchAllListings } from '../../actions/listing_actions';
import { receiveMapBounds } from '../../actions/geolocation_actions';


const mapStateToProps = state => ({
  listings: Object.values(state.entities.listings),
  filters: state.ui.filters,
  geolocation: state.ui.geo.geolocation,
  mapBounds: state.ui.geo.mapBounds,
})

const mapDispatchToProps = dispatch => ({
  fetchAllListings: () => dispatch(fetchAllListings()),
  receiveMapBounds: (bounds) => dispatch(receiveMapBounds(bounds)),
  receiveGeolocationEntry: entry => dispatch(receiveGeolocationEntry(entry))
})

export default connect(mapStateToProps, mapDispatchToProps)(Explore)
