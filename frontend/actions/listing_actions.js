import * as APIUtil from '../util/listing_api_util';

export const RECEIVE_ALL_LISTINGS = 'RECEIVE_ALL_LISTINGS';
export const RECEIVE_SINGLE_LISTING = 'RECEIVE_SINGLE_LISTING';
export const RECEIVE_HOME_PAGE_LISTINGS = 'RECEIVE_HOME_PAGE_LISTINGS';

const receiveAllListings = payload => ({
  type: RECEIVE_ALL_LISTINGS,
  payload
});

const receiveSingleListing = payload => ({
  type: RECEIVE_SINGLE_LISTING,
  payload
});

const receiveHomePageListings = payload => ({
  type: RECEIVE_HOME_PAGE_LISTINGS,
  payload
})

export const fetchAllListings = () => dispatch => (
  APIUtil.fetchAllListings().then(listings =>
    dispatch(receiveAllListings(listings)))
);

export const fetchSingleListing = (id) => dispatch => (
  APIUtil.fetchSingleListing(id).then(listing =>
    dispatch(receiveSingleListing(listing)))
);

export const fetchHomePageListings = () => dispatch => (
  APIUtil.fetchHomePageListings().then(listings =>
    dispatch(receiveHomePageListings(listings)))
);
