import * as APIUtil from '../util/listing_api_util';

export const RECEIVE_ALL_LISTINGS = 'RECEIVE_ALL_LISTINGS';
export const RECEIVE_SINGLE_LISTING = 'RECEIVE_SINGLE_LISTING';

const receiveAllListings = listings => ({
  type: RECEIVE_ALL_LISTINGS,
  listings
});

const receiveSingleListing = listing => ({
  type: RECEIVE_SINGLE_LISTING,
  listing
});

export const fetchAllListings = () => dispatch => (
  APIUtil.fetchAllListings().then(listings =>
    dispatch(receiveAllListings(listings)))
);

export const fetchSingleListing = (id) => dispatch => (
  APIUtil.fetchSingleListing(id).then(listing =>
    dispatch(receiveSingleListing(listing)))
);
