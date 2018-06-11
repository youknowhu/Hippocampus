import UsersReducer from '../reducers/users_reducer';
import ListingsReducer from '../reducers/listings_reducer';
import ListingPhotosReducer from '../reducers/listing_photos_reducer';
import ReviewsReducer from '../reducers/reviews_reducer';
import SortedReviewsReducer from '../reducers/sorted_reviews_reducer';
import BookingsReducer from '../reducers/bookings_reducer';
import ExternalReducer from '../reducers/external_api_reducer';

describe('Entities Reducers', () => {
  const testUsers = {
    19: {
      id: 19,
      username: "guest",
      firstName: "Guest",
      lastName: "Login",
    },
    20: {
      id: 20,
      username: "test",
      firstName: "testingFirst",
      lastName: "testingLast",
    },
  };

  const listing = {
    listings: {
      31: {
      id: 31,
      hostId: 24,
      title: "Glacier National Park",
      body: "Glacier National Park has magnificient glacier-carved peaks and valleys. Keep an eye out for mountain goats to grizzly bears.",
      dailyCost: 25,
      isPrivate: false,
      isCamping: true,
      allowsPets: false,
      maxCapacity: 10,
      checkInAfter: "2 PM",
      checkOutBefore: "12 PM",
      lat: 48.6587896,
      lng: -113.7870225,
      iconUrl: "https://res.cloudinary.com/deor0br3s/image/upload/q_auto/v1522783893/glacier_national_park.jpg"
      }
    },
    host: {
      24: {
      id: 24,
      username: "nps",
      firstName: "National Park Services",
      lastName: "_",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1d/US-NationalParkService-Logo.svg"
      }
    },
    listingPhotos: {
      168: {
      id: 168,
      listingId: 31,
      imgUrl: "https://res.cloudinary.com/deor0br3s/image/upload/q_auto/v1522783893/glacier_national_park.jpg",
      order: 1
      },
      169: {
      id: 169,
      listingId: 31,
      imgUrl: "https://res.cloudinary.com/deor0br3s/image/upload/q_auto/v1522904739/glacier1.jpg",
      order: 2
      },
      170: {
      id: 170,
      listingId: 31,
      imgUrl: "https://res.cloudinary.com/deor0br3s/image/upload/q_auto/v1522904773/glacier2.jpg",
      order: 3
      },
      171: {
      id: 171,
      listingId: 31,
      imgUrl: "https://res.cloudinary.com/deor0br3s/image/upload/q_auto/v1522904783/glacier3jpg.jpg",
      order: 4
      },
      172: {
      id: 172,
      listingId: 31,
      imgUrl: "https://res.cloudinary.com/deor0br3s/image/upload/q_auto/v1522904739/glacier4.jpg",
      order: 5
      },
      173: {
      id: 173,
      listingId: 31,
      imgUrl: "https://res.cloudinary.com/deor0br3s/image/upload/q_auto/v1522904739/glacier7.jpg",
      order: 6
      },
      174: {
      id: 174,
      listingId: 31,
      imgUrl: "https://res.cloudinary.com/deor0br3s/image/upload/q_auto/v1522904738/glacier6.jpg",
      order: 7
      }
    },
    bookings: {
      36: {
      id: 36,
      guestId: 20,
      listingId: 31,
      checkIn: "2018-04-01",
      checkOut: "2018-04-04",
      numGuests: 5,
      createdAt: "2018-06-09T17:43:15.361-07:00"
      }
    },
  reviews: {
    26: {
    id: 26,
    userId: 20,
    listingId: 31,
    body: "I highly recommend the Grinnell Glacier hike. We saw wildlife along the way, including big horn sheep!",
    createdAt: "2018-06-09T17:43:15.289-07:00"
    },
    27: {
    id: 27,
    userId: 21,
    listingId: 31,
    body: "Wow, Going-to-the-Sun road was absolutely breathtaking",
    createdAt: "2018-06-09T17:43:15.297-07:00"
    }
  },
  external: {
    elevation: 1205.602783203125,
    weather: "scattered clouds",
    temp: 50
  },
  currentUserSave: {
    id: 520,
    user_id: 19,
    listing_id: 31,
    created_at: "2018-06-10T21:04:10.350-07:00",
    updated_at: "2018-06-10T21:04:10.350-07:00"
  },
  sortedReviews: [
    27,
    26
  ],
currentUserBookings: null
};

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

    describe('handles the RECEIVE_ALL_USERS action', () => {
      let action;

      beforeEach(() => {
        action = {
          type: 'RECEIVE_ALL_USERS',
          payload: {
            users: testUsers
          }
        };
      });

      it('should return all users', () => {
        const state = UsersReducer(undefined, action);
        expect(state).toEqual(testUsers);
      });
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

    describe('handles the RECEIVE_SINGLE_LISTING action', () => {
      let action;

      beforeEach(() => {
        action = {
          type: 'RECEIVE_SINGLE_LISTING',
          payload: listing
        };
      });

      it('should return listing info', () => {
        const state = ListingsReducer(undefined, action);
        expect(state).toEqual(listing.listings);
      });
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

    describe('handles the RECEIVE_SINGLE_LISTING action', () => {
      let action;

      beforeEach(() => {
        action = {
          type: 'RECEIVE_SINGLE_LISTING',
          payload: listing
        };
      });

      it('should return listing photos', () => {
        const state = ListingPhotosReducer(undefined, action);
        expect(state).toEqual(listing.listingPhotos);
      });
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

    describe('handles the RECEIVE_SINGLE_LISTING action', () => {
      let action;

      beforeEach(() => {
        action = {
          type: 'RECEIVE_SINGLE_LISTING',
          payload: listing
        };
      });

      it('should return reviews for listing', () => {
        const state = ReviewsReducer(undefined, action);
        expect(state).toEqual(listing.reviews);
      });
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

    describe('handles the RECEIVE_SINGLE_LISTING action', () => {
      let action;

      beforeEach(() => {
        action = {
          type: 'RECEIVE_SINGLE_LISTING',
          payload: listing
        };
      });

      it('should return sorted reviews for listing', () => {
        const state = SortedReviewsReducer(undefined, action);
        expect(state).toEqual(listing.sortedReviews);
      });
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

    describe('handles the RECEIVE_SINGLE_LISTING action', () => {
      let action;

      beforeEach(() => {
        action = {
          type: 'RECEIVE_SINGLE_LISTING',
          payload: listing
        };
      });

      it('should return bookings for listing', () => {
        const state = BookingsReducer(undefined, action);
        expect(state).toEqual(listing.bookings);
      });
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

    describe('handles the RECEIVE_SINGLE_LISTING action', () => {
      let action;

      beforeEach(() => {
        action = {
          type: 'RECEIVE_SINGLE_LISTING',
          payload: listing
        };
      });

      it('should return external api call\'s listing elevation and current weather', () => {
        const state = ExternalReducer(undefined, action);
        expect(state).toEqual(listing.external);
      });
    });
  });
});
