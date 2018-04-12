import { connect } from 'react-redux';
import Explore from './explore';
import { fetchAllListings } from '../../actions/listing_actions';
import { receiveMapBounds } from '../../actions/geolocation_actions';


const msp = state => ({
  listings: Object.values(state.entities.listings),
  filters: state.ui.filters,
  geolocation: state.ui.geo.geolocation,
})

const mdp = dispatch => ({
  fetchAllListings: () => dispatch(fetchAllListings()),
  receiveMapBounds: (bounds) => dispatch(receiveMapBounds(bounds))
})

export default connect(msp, mdp)(Explore)
