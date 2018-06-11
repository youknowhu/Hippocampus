import * as actions from '../actions/listing_actions';
import * as APIUtil from '../util/listing_api_util';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('Listings Actions', () => {
  describe('listings constants', () => {
    it('should contain a RECEIVE_ALL_LISTINGS constant', () => {
      expect(actions.RECEIVE_ALL_LISTINGS).toEqual('RECEIVE_ALL_LISTINGS');
    });

    it('should contain a RECEIVE_SINGLE_LISTING constant', () => {
      expect(actions.RECEIVE_SINGLE_LISTING).toEqual('RECEIVE_SINGLE_LISTING');
    });

    it('should contain a CLEAR_LISTING constant', () => {
      expect(actions.CLEAR_LISTING).toEqual('CLEAR_LISTING');
    });
    it('should contain a RECEIVE_HOME_PAGE_LISTINGS constant', () => {
      expect(actions.RECEIVE_HOME_PAGE_LISTINGS).toEqual('RECEIVE_HOME_PAGE_LISTINGS');
    });
  });

  describe('async calls to database using thunk', () => {
    let store;

    beforeEach(() => {
      store = mockStore({ listings: {} });
    });

    describe('fetchAllListings', () => {
      it('should export a fetchAllListings function', () => {
        expect(typeof actions.fetchAllListings).toEqual('function');
      });

      it('dispatches RECEIVE_ALL_LISTINGS when posts have been fetched', () => {
        const listings = { 1: { id: 1, title: "Test" }, 2: { id: 2, title: "Test2" } };
        APIUtil.fetchAllListings = jest.fn(() => (
          Promise.resolve(listings)
        ));
        const expectedActions = [{ type: "RECEIVE_ALL_LISTINGS", payload: listings }];

        return store.dispatch(actions.fetchAllListings()).then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      });
    });

    describe('fetchSingleListing', () => {
      it('should export a fetchSingleListing function', () => {
        expect(typeof actions.fetchSingleListing).toEqual('function');
      });

      it('dispatches RECEIVE_ALL_LISTINGS when posts have been fetched', () => {
        const listing = { 1: { id: 1, title: "Test" } };
        const id = 1;
        APIUtil.fetchSingleListing = jest.fn(id => (
          Promise.resolve(listing)
        ));
        const expectedActions = [{ type: "RECEIVE_SINGLE_LISTING", payload: listing }];

        return store.dispatch(actions.fetchSingleListing(1)).then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      });
    });

    describe('clearListing', () => {
      it('should export a clearListing function', () => {
        expect(typeof actions.clearListing).toEqual('function');
      });

      it('clearListing should create an action to CLEAR_LISTING', () => {
        const expectedAction = {
          type: actions.CLEAR_LISTING
        };

      expect(actions.clearListing()).toEqual(expectedAction);
      });
    });

    describe('fetchHomePageListings', () => {
      it('should export a fetchHomePageListings function', () => {
        expect(typeof actions.fetchHomePageListings).toEqual('function');
      });

      it('dispatches RECEIVE_HOME_PAGE_LISTINGS when posts have been fetched', () => {
        const homeListings = { 1: { id: 1, title: "Test" }, 2: { id: 2, title: "Test2" } };
        APIUtil.fetchHomePageListings = jest.fn(() => (
          Promise.resolve(homeListings)
        ));
        const expectedActions = [{ type: "RECEIVE_HOME_PAGE_LISTINGS", payload: homeListings }];

        return store.dispatch(actions.fetchHomePageListings()).then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      });
    });
  });
});
