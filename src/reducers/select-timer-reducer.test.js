// We're testing these
import { SELECT_TIMER, selectTimer } from '../actions'
import selectTimerReducer from './select-timer-reducer';

// test the selectedTimerReducer
describe('test selectTimerReducer', () => {
  // Should return null state if not set and type is not matched
  it('should return default state', () => {
    // Passing undefined for state should return the default value of null
    const expectedState = selectTimerReducer(undefined, { type: "INVALID_TYPE" });
    expect(expectedState).toBe(null);
  });

  // Should return index when type is SELECT_TIMER
  it('should return default state', () => {
    // Generate a valid object should return state of index
    const index = 111;
    const action = selectTimer(index);
    const expectedState = selectTimerReducer(undefined, action);
    expect(typeof expectedState).toBe('number');
    expect(expectedState).toBe(index);
  });
});
