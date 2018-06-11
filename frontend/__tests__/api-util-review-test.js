import {
  fetchReview,
  createReview,
  updateReview,
  deleteReview,
} from '../util/review_api_util';

describe('The Review API Util', () => {
  beforeEach(() => {
    global.$ = require.requireMock('jquery');
    global.$.ajax = jest.fn(options => "ajax promise");
  });

  afterEach(() => {
    global.$.ajax.mockClear();
  });

  it('fetchReview makes request and returns an ajax promise', () => {
    const returnValue = fetchReview(22);
    expect($.ajax).toBeCalled();

    // This line gets the first argument of the first call to $.ajax
    const ajaxCallArg = $.ajax.mock.calls[0][0];
    expect(ajaxCallArg.url).toEqual('/api/reviews/22');
    expect(returnValue).toEqual("ajax promise");
  });

  it('createReview makes request and returns an ajax promise with review object', () => {
    const reviewParams = { userId: 19, listingId: 31, body: 'Content' };
    const review = {
      user_id: reviewParams.userId,
      listing_id: reviewParams.listingId,
      body: reviewParams.body
    }
    const returnValue = createReview(reviewParams);
    expect($.ajax).toBeCalled();

    const ajaxCallArg = $.ajax.mock.calls[0][0];
    expect(ajaxCallArg.url).toEqual('/api/reviews');
    expect(ajaxCallArg.type || ajaxCallArg.method).toMatch(/post/i);
    expect(ajaxCallArg.data).toEqual({ review });
    expect(returnValue).toEqual("ajax promise");
  });

  it('updateReview makes request and returns an ajax promise with review object', () => {
    const reviewParams = { id: 22, userId: 19, listingId: 31, body: 'Udpated Content' };
    const review = {
      user_id: reviewParams.userId,
      listing_id: reviewParams.listingId,
      body: reviewParams.body
    }
    const returnValue = updateReview(reviewParams);
    expect($.ajax).toBeCalled();

    const ajaxCallArg = $.ajax.mock.calls[0][0];
    expect(ajaxCallArg.url).toEqual('/api/reviews/22');
    expect(ajaxCallArg.type || ajaxCallArg.method).toMatch(/patch/i);
    expect(ajaxCallArg.data).toEqual({ review });
    expect(returnValue).toEqual("ajax promise");
  });

  it('deleteReview makes request and returns an ajax promise', () => {
    const returnValue = deleteReview(22);
    expect($.ajax).toBeCalled();
    const ajaxCallArg = $.ajax.mock.calls[0][0];

    expect(ajaxCallArg.url).toEqual('/api/reviews/22');
    expect(ajaxCallArg.type || ajaxCallArg.method).toMatch(/delete/i);
    expect(returnValue).toEqual("ajax promise");
  });
});
