
import * as actions from '../actions/dates_actions';

const dates = {
  checkIn: "Jun 20, 2018",
  checkOut: "Jun 25, 2018",
}

describe('Dates Actions', () => {
  describe('dates constants', () => {
    it('should contain a RECEIVE_SEARCH_DATES constant', () => {
      expect(actions.RECEIVE_SEARCH_DATES).toEqual('RECEIVE_SEARCH_DATES');
    });
  });

  describe('receive search dates', () => {
    it('should export a receiveSearchDates function', () => {
      expect(typeof actions.receiveSearchDates).toEqual('function');
    });

    it('receiveSearchDates shoudl create an action to RECEIVE_SEARCH_DATES', () => {
      const expectedAction = {
        type: actions.RECEIVE_SEARCH_DATES, dates
      };

    expect(actions.receiveSearchDates(dates)).toEqual(expectedAction);
    });
  });
});
