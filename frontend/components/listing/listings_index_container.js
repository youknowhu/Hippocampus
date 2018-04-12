import { connect } from 'react-redux';
import ListingsIndex from './listings_index'
import { fetchAllListings } from '../../actions/listing_actions'


const msp = state => ({
  listings: Object.values(state.entities.listings),
  filters: state.ui.filters,
  geolocation: state.ui.geo.geolocation,
  mapBounds: state.ui.geo.mapBounds,
})

const mdp = dispatch => ({
  fetchAllListings: () => dispatch(fetchAllListings()),
})

export default connect(msp, mdp)(ListingsIndex)