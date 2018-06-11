import BookingErrorsReducer from '../reducers/booking_errors_reducer';
import SessionErrorsReducer from '../reducers/session_errors_reducer';

describe('Error Reducers', () => {
  describe('BookingErrorsReducer', () => {
    it('exports a function', () => {
      expect(typeof BookingErrorsReducer).toEqual('function');
    });

    it('should initialize with an empty object as the default state', () => {
      expect(BookingErrorsReducer(undefined, [])).toEqual([]);
    });

    it('should return the previous state if an action is not matched', () => {
      const oldState = { 1: 'oldState' };
      const newState = BookingErrorsReducer(oldState, { type: 'unmatchedtype' });
      expect(newState).toEqual(oldState);
    });


    describe('handles the RECEIVE_BOOKING_ERRORS action', () => {
      let action,
        bookingErrors;

      beforeEach(() => {
        bookingErrors = ['check in cannot be blank', 'check out cannot be blank'];
        action = {
          type: 'RECEIVE_BOOKING_ERRORS',
          errors: bookingErrors
        };
      });

      it('should replace the state with the action\'s booking errors', () => {
        const state = BookingErrorsReducer(undefined, action);
        expect(state).toEqual(bookingErrors);
      });

      it('should not modify the old state', () => {
        let oldState = { 1: 'oldState' };
        BookingErrorsReducer(oldState, action);
        expect(oldState).toEqual({ 1: 'oldState' });
      });
    });

    describe('handles the CLEAR_BOOKING_ERRORS action', () => {
      let action;

      beforeEach(() => {
        action = {
          type: 'CLEAR_BOOKING_ERRORS',
        }
      });

      it('should return an empty array', () => {
        const state = BookingErrorsReducer(undefined, action);
        expect(state).toEqual([]);
      });

      it('should not modify the old state', () => {
        let oldState = { 1: 'oldState' };
        BookingErrorsReducer(oldState, action);
        expect(oldState).toEqual({ 1: 'oldState' });
      });
    });
  });

  describe('SessionErrorsReducer', () => {
    it('exports a function', () => {
      expect(typeof SessionErrorsReducer).toEqual('function');
    });

    it('should initialize with an empty object as the default state', () => {
      expect(SessionErrorsReducer(undefined, [])).toEqual([]);
    });

    it('should return the previous state if an action is not matched', () => {
      const oldState = { 1: 'oldState' };
      const newState = SessionErrorsReducer(oldState, { type: 'unmatchedtype' });
      expect(newState).toEqual(oldState);
    });


    describe('handles the RECEIVE_SESSION_ERRORS action', () => {
      let action,
        sessionErrors;

      beforeEach(() => {
        sessionErrors = ['password cannot be blank', 'zip code must be five or nine digits'];
        action = {
          type: 'RECEIVE_SESSION_ERRORS',
          errors: sessionErrors
        };
      });

      it('should replace the state with the action\'s session errors', () => {
        const state = SessionErrorsReducer(undefined, action);
        expect(state).toEqual(sessionErrors);
      });

      it('should not modify the old state', () => {
        let oldState = { 1: 'oldState' };
        SessionErrorsReducer(oldState, action);
        expect(oldState).toEqual({ 1: 'oldState' });
      });
    });

    describe('handles the CLEAR_ERRORS action', () => {
      let action;

      beforeEach(() => {
        action = {
          type: 'CLEAR_ERRORS',
        }
      });

      it('should return an empty array', () => {
        const state = SessionErrorsReducer(undefined, action);
        expect(state).toEqual([]);
      });

      it('should not modify the old state', () => {
        let oldState = { 1: 'oldState' };
        SessionErrorsReducer(oldState, action);
        expect(oldState).toEqual({ 1: 'oldState' });
      });
    });
  });
});
