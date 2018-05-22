// Test these things
import { NEW_TIMER, addTimer } from '../actions'
import timerReducer from './timers-reducer';
import Timer from './timer'

describe('test timerReducer', () => {
  // Should return null state is not set and type is not matched
  it('should return default state when type is undefined', () => {
    const expectedState = timerReducer(undefined, { type: "INVALID_TYPE" });
    expect(Array.isArray(expectedState)).toBe(true);
    expect(expectedState.length).toBe(0);
  });

  // Should make a new Timer
  it('should return a new Timer with name', () => {
    // Make a new timer action with name
    const name = "Test Timer";
    const expectedState = timerReducer(undefined, addTimer(name));
    // test the results
    expect(Array.isArray(expectedState)).toBe(true);
    expect(expectedState.length).toBe(1);
    expect(expectedState[0]).toBeInstanceOf(Timer);
    expect(expectedState[0].name).toBe(name);
  });

  // Should make a new Timer
  it('Should make any number of timers', () => {
    let state = timerReducer(undefined, { type: "INVALID_TYPE" });

    for (let i = 0; i < 99; i += 1) {
      const name = `Test Timer ${i}`;
      const expectedState = timerReducer(state, addTimer(name));
      // test the results
      expect(Array.isArray(expectedState)).toBe(true);
      // expect(expectedState.length).toBe(i);
      expect(expectedState[i]).toBeInstanceOf(Timer);
      expect(expectedState[i].name).toBe(name);
      state = expectedState;
    }
  });
});
