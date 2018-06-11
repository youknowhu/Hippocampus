import SessionReducer from '../reducers/session_reducer';

describe('Session Reducer', () => {

  const _nullUser = { currentUser: null }
  it('exports a function', () => {
    expect(typeof SessionReducer).toEqual('function');
  });

  it('should initialize with an empty object as the default state', () => {
    expect(SessionReducer(undefined, {})).toEqual(_nullUser);
  });

  it('should return the previous state if an action is not matched', () => {
    const oldState = { 1: 'oldState' };
    const newState = SessionReducer(oldState, { type: 'unmatchedtype' });
    expect(newState).toEqual(oldState);
  });

  describe('handles the RECEIVE_CURRENT_USER action', () => {
    let action,
      currentUser

    beforeEach(() => {
      currentUser = {
        id: 1,
        firstName: 'testingFirst',
        lastName: 'testingLast',
        username: 'testing'
      };
      action = {
        type: 'RECEIVE_CURRENT_USER',
        currentUser
      };
    });

    it('should replace the state with the action\'s currentUser', () => {
      const state = SessionReducer(undefined, action);
      expect(state).toEqual({ currentUser });
    });

    it('should not modify the old state', () => {
      let oldState = { 1: 'oldState' };
      SessionReducer(oldState, action);
      expect(oldState).toEqual({ 1: 'oldState' });
    });
  });
});
