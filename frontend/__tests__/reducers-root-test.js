import RootReducer from '../reducers/root_reducer';
import EntitiesReducer from '../reducers/entities_reducer';
import UIReducer from '../reducers/ui_reducer';
import SessionReducer from '../reducers/session_reducer';
import ErrorsReducer from '../reducers/errors_reducer';
import { createStore, combineReducers } from 'redux';

describe('RootReducer', () => {
  let testStore;

  beforeAll(() => {
    testStore = createStore(RootReducer);
  });

  it('exports a function', () => {
    expect(typeof RootReducer).toEqual('function');
  });

  it('is initiated with the following child reducers: Entities, Session, Errors, and UI', () => {
    expect(testStore.getState().entities).toEqual(EntitiesReducer(undefined, {}));
    expect(testStore.getState().ui).toEqual(UIReducer(undefined, {}));
    expect(testStore.getState().session).toEqual(SessionReducer(undefined, {}));
    expect(testStore.getState().errors).toEqual(ErrorsReducer(undefined, {}));
  });

  it('child reducers can receive an irrelevant dispatched action and return default state', () => {
    let action = { type: "FAKE_ACTION" };
    testStore.dispatch(action);
    expect(testStore.getState().entities).toEqual(EntitiesReducer(undefined, {}));
    expect(testStore.getState().ui).toEqual(UIReducer(undefined, {}));
    expect(testStore.getState().session).toEqual(SessionReducer(undefined, {}));
    expect(testStore.getState().errors).toEqual(ErrorsReducer(undefined, {}));
  });

});
