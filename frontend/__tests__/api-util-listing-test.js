import {
  fetchAllListings,
  fetchSingleListing,
  fetchHomePageListings,
} from '../util/listing_api_util';

describe('The listings API Util', () => {
  beforeEach(() => {
    global.$ = require.requireMock('jquery');
    global.$.ajax = jest.fn(options => "ajax promise");
  });

  afterEach(() => {
    global.$.ajax.mockClear();
  });

  it('fetchListings makes request and returns an ajax promise', () => {
    const returnValue = fetchAllListings();
    expect($.ajax).toBeCalled();

    // This line gets the first argument of the first call to $.ajax
    const ajaxCallArg = $.ajax.mock.calls[0][0];
    expect(ajaxCallArg.url).toEqual('/api/listings');
    expect(returnValue).toEqual("ajax promise");
  });

  it('fetchSingleListing makes request and returns an ajax promise', () => {
    const returnValue = fetchSingleListing(31);
    expect($.ajax).toBeCalled();

    const ajaxCallArg = $.ajax.mock.calls[0][0];
    expect(ajaxCallArg.url).toEqual('/api/listings/31');
    expect(returnValue).toEqual("ajax promise");
  });

  it('fetchHomePageListings makes request and returns an ajax promise', () => {
    const returnValue = fetchHomePageListings();
    expect($.ajax).toBeCalled();

    // This line gets the first argument of the first call to $.ajax
    const ajaxCallArg = $.ajax.mock.calls[0][0];
    expect(ajaxCallArg.url).toEqual('/api/home_index');
    expect(returnValue).toEqual("ajax promise");
  });
});
