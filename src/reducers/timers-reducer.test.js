// Test these things
import { NEW_TIMER, addTimer } from '../actions';
import { DELETE_TIMER, deleteTimer } from '../actions';
import { START_TIMER, startTimer } from '../actions';
import { RESET_TIMER, resetTimer } from '../actions';
import { UPDATE, update } from '../actions';
import timerReducer from './timers-reducer';
import Timer from './timer'

describe('test timerReducer', () => {

  it('should return default state when type is undefined', () => {
    const expectedState = timerReducer(undefined, { type: "INVALID_TYPE" });
    expect(Array.isArray(expectedState)).toBe(true);
    expect(expectedState.length).toBe(0);
  });

  it('should add a new timer', () => {
    // Make a new timer action with name
    const name = "Test Timer";
    const expectedState = timerReducer(undefined, addTimer(name));
    // test the results
    expect(Array.isArray(expectedState)).toBe(true);
    expect(expectedState.length).toBe(1);
    expect(expectedState[0]).toBeInstanceOf(Timer);
    expect(expectedState[0].name).toBe(name);
  });

  it('Should make any number of timers', () => {
    let state = timerReducer(undefined, { type: "INVALID_TYPE" });
    let count = Math.floor(Math.random() * 99) + 1;

    for (let i = 0; i < count; i += 1) {
      const name = `Test Timer ${i}`;
      const expectedState = timerReducer(state, addTimer(name));
      // test the results
      expect(Array.isArray(expectedState)).toBe(true);
      expect(expectedState.length).toBe(i + 1);
      expect(expectedState[i]).toBeInstanceOf(Timer);
      expect(expectedState[i].name).toBe(name);
      state = expectedState;
    }
  });

  it('Should delete timer at index', () => {
    // Make a new timer action with name
    const name = "Test Timer";
    const stateWithTimer = timerReducer(undefined, addTimer(name));
    // The new timer should exist
    expect(Array.isArray(stateWithTimer)).toBe(true);
    expect(stateWithTimer.length).toBe(1);

    const stateWithoutTimer = timerReducer(stateWithTimer, deleteTimer(0));
    expect(Array.isArray(stateWithoutTimer)).toBe(true);
    expect(stateWithoutTimer.length).toBe(0);
  });

  it('Should reset timer at index', () => {
    const name = "Test Timer";
    const state = timerReducer(undefined, addTimer(name));

    expect(Array.isArray(state)).toBe(true);
    expect(state.length).toBe(1);
    const mockTime = 9999;
    state[0].time = mockTime;
    expect(state[0].time).toBe(mockTime);
    const newState = timerReducer(state, resetTimer(0));
    expect(Array.isArray(newState)).toBe(true);
    expect(newState.length).toBe(1);
    expect(newState[0].time).toBe(0);
  });

  it('should start a timer', () => {
    const name = "Test Timer";
    const state = timerReducer(undefined, addTimer(name));
    expect(state[0].isRunning).toBe(false);
    const newState = timerReducer(state, startTimer(0));
    expect(newState[0].isRunning).toBe(true);
  });

  it('Should update timer at index with delta-time', () => {
    const name = "Test Timer";
    const initialState = timerReducer(undefined, addTimer(name));
    const initialTime = initialState[0].time;
    const intermediateState = timerReducer(initialState, startTimer(0));
    const deltaTime = Math.floor(Math.random() * 1000);
    const finalState = timerReducer(intermediateState, update(deltaTime));
    expect(finalState[0].time).toBe(initialTime + deltaTime);
  });

});
