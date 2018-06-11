import UsersReducer from '../reducers/users_reducer';
import ListingsReducer from '../reducers/listings_reducer';
import ListingPhotosReducer from '../reducers/listing_photos_reducer';
import ReviewsReducer from '../reducers/reviews_reducer';
import SortedReviewsReducer from '../reducers/sorted_reviews_reducer';
import BookingsReducer from '../reducers/bookings_reducer';
import ExternalReducer from '../reducers/external_api_reducer';

describe('Entities Reducers', () => {
  describe('Users Reducer', () => {
    it('exports a function', () => {
      expect(typeof UsersReducer).toEqual('function');
    });

    it('should initialize with an empty object as the default state', () => {
      expect(UsersReducer(undefined, {})).toEqual({});
    });

    it('should return the previous state if an action is not matched', () => {
      const oldState = { 1: 'oldState' };
      const newState = UsersReducer(oldState, { type: 'unmatchedtype' });
      expect(newState).toEqual(oldState);
    });
  });

  describe('Listings Reducer', () => {
    it('exports a function', () => {
      expect(typeof ListingsReducer).toEqual('function');
    });

    it('should initialize with an empty object as the default state', () => {
      expect(ListingsReducer(undefined, {})).toEqual({});
    });

    it('should return the previous state if an action is not matched', () => {
      const oldState = { 1: 'oldState' };
      const newState = ListingsReducer(oldState, { type: 'unmatchedtype' });
      expect(newState).toEqual(oldState);
    });
  });

  describe('Listing Photos Reducer', () => {
    it('exports a function', () => {
      expect(typeof ListingPhotosReducer).toEqual('function');
    });

    it('should initialize with an empty object as the default state', () => {
      expect(ListingPhotosReducer(undefined, {})).toEqual({});
    });

    it('should return the previous state if an action is not matched', () => {
      const oldState = { 1: 'oldState' };
      const newState = ListingPhotosReducer(oldState, { type: 'unmatchedtype' });
      expect(newState).toEqual(oldState);
    });
  });

  describe('Reviews Reducer', () => {
    it('exports a function', () => {
      expect(typeof ReviewsReducer).toEqual('function');
    });

    it('should initialize with an empty object as the default state', () => {
      expect(ReviewsReducer(undefined, {})).toEqual({});
    });

    it('should return the previous state if an action is not matched', () => {
      const oldState = { 1: 'oldState' };
      const newState = ReviewsReducer(oldState, { type: 'unmatchedtype' });
      expect(newState).toEqual(oldState);
    });
  });

  describe('Sorted Reviews Reducer', () => {
    it('exports a function', () => {
      expect(typeof SortedReviewsReducer).toEqual('function');
    });

    it('should initialize with an empty object as the default state', () => {
      expect(SortedReviewsReducer(undefined, [])).toEqual([]);
    });

    it('should return the previous state if an action is not matched', () => {
      const oldState = { 1: 'oldState' };
      const newState = SortedReviewsReducer(oldState, { type: 'unmatchedtype' });
      expect(newState).toEqual(oldState);
    });
  });

  describe('Bookings Reducer', () => {
    it('exports a function', () => {
      expect(typeof BookingsReducer).toEqual('function');
    });

    it('should initialize with an empty object as the default state', () => {
      expect(BookingsReducer(undefined, {})).toEqual({});
    });

    it('should return the previous state if an action is not matched', () => {
      const oldState = { 1: 'oldState' };
      const newState = BookingsReducer(oldState, { type: 'unmatchedtype' });
      expect(newState).toEqual(oldState);
    });
  });

  describe('External Reducer', () => {
    it('exports a function', () => {
      expect(typeof ExternalReducer).toEqual('function');
    });

    it('should initialize with an empty object as the default state', () => {
      expect(ExternalReducer(undefined, {})).toEqual({});
    });

    it('should return the previous state if an action is not matched', () => {
      const oldState = { 1: 'oldState' };
      const newState = ExternalReducer(oldState, { type: 'unmatchedtype' });
      expect(newState).toEqual(oldState);
    });
  });
});
