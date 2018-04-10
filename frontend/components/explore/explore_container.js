import { connect } from 'react-redux';
import Explore from './explore'
import { fetchAllListings } from '../../actions/listing_actions'


const msp = state => ({
  listings: Object.values(state.entities.listings),
  filters: state.ui.filters,
})

const mdp = dispatch => ({
  fetchAllListings: () => dispatch(fetchAllListings()),
})

export default connect(msp, mdp)(Explore)
