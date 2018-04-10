import { connect } from 'react-redux';
import ListingsFilter from './listings_filter'
import { fetchAllListings } from '../../actions/listing_actions'


const msp = state => ({
  listings: state.entities.listings,
})

const mdp = dispatch => ({
  fetchAllListings: () => dispatch(fetchAllListings()),
})

export default connect(msp, mdp)(ListingsFilter)
