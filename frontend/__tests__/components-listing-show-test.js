/* globals jest */

import React from 'react';
import { Route } from 'react-router-dom';
import ListingShowContainer from '../components/listing/listing_container';
import { mount } from 'enzyme';
import * as ListingActions from '../actions/listing_actions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockRouter from 'react-mock-router';

const  testListing = {
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



const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);
const testStore = mockStore({ listings: { 31: testListing.listings[31] } });

describe('Listing Show', () => {
  let listingShowWrapper;

  beforeEach(() => {
    ListingActions.fetchListing = jest.fn(() => dispatch => {});

    listingShowWrapper = mount(<div> </div>
      <MockRouter params={{ 31: testListing.listings[31].id}}>
        <Route render={props => (
          <ListingShowContainer {...props} store={testStore} />
        )}/>
      </ MockRouter>
    ).find('ListingShow');
  });

  it('correctly maps state to props', () => {
    expect(listingShowWrapper.props().listing).toEqual(testListings.listings[31]);
    expect(listingShowWrapper.props().host).toEqual(testListings.host);
    expect(listingShowWrapper.props().numReviews).toEqual(testListings.sortedReviews.length);
    expect(listingShowWrapper.props().external).toEqual(testListings.external);
  });

  it('correctly maps dispatch to props', () => {
    expect(listingShowWrapper.props().fetchListing).toBeDefined();
    expect(listingShowWrapper.props().clearListing).toBeDefined();
  });

  it('contains the listing information', () => {
    const renderedText = listingShowWrapper.text();

    expect(ListingActions.fetchSingleListing).toBeCalledWith(testListing.listings[31].id);
    expect(renderedText).toContain(testListing.listings[31].title);
    expect(renderedText).toContain(testListing.listings[31].body);
  });
});
