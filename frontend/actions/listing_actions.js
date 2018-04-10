import * as APIUtil from '../util/listing_api_util';

export const RECEIVE_ALL_LISTINGS = 'RECEIVE_ALL_LISTINGS';
export const RECEIVE_SINGLE_LISTING = 'RECEIVE_SINGLE_LISTING';

const receiveAllListings = payload => ({
  type: RECEIVE_ALL_LISTINGS,
  payload
});

const receiveSingleListing = payload => ({
  type: RECEIVE_SINGLE_LISTING,
  payload
});

export const fetchAllListings = () => dispatch => (
  APIUtil.fetchAllListings().then(listings =>
    dispatch(receiveAllListings(listings)))
);

export const fetchSingleListing = (id) => dispatch => (
  APIUtil.fetchSingleListing(id).then(listing =>
    dispatch(receiveSingleListing(listing)))
);
