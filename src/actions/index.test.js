// We'll be testing this actions
import { NEW_TIMER, addTimer } from './index';
import { UPDATE, update } from './index';
import { RESET_TIMER, resetTimer } from './index';
import { DELETE_TIMER, deleteTimer } from './index';
import { START_TIMER, startTimer } from './index';
import { STOP_TIMER, stopTimer } from './index';
import { TOGGLE_TIMER, toggleTimer } from './index';
import { SELECT_TIMER, selectTimer } from './index';

// Test actions
describe('test actions', () => {
  // Test an action has the correct type
  it('should create an action with type NEW_TIMER', () => {
    const tested = addTimer();
    expect(typeof tested).toBe('object');       // tested should be an object
    expect(typeof tested.type).toBe('string');  // tested.type should be string
    expect(tested.type).toBe(NEW_TIMER);        // tested.type should equal NEW_TIMER
  });

  // Test an action has the correct type and payload
  it('should create an action with type UPDATE and payload 1234', () => {
    const deltaTime = 1234;
    const expected = { type: UPDATE, payload: { deltaTime } };
    const tested = update(deltaTime);

    expect(expected.type).toBe(tested.type);             // match the type
    expect(typeof expected.payload.deltaTime).toBe('number');   // check the value type
    expect(expected.payload.deltaTime).toBe(tested.payload.deltaTime);  // match the value
  });

  // Test an action has the correct type and payload
  it('should create an action with type RESET_TIMER and payload 88', () => {
    const index = 88;
    const resetAction = resetTimer(index);

    expect(typeof resetAction).toBe('object');      // Should be an object
    expect(resetAction.type).toBe(RESET_TIMER);     // type should match
    expect(resetAction.payload.index).toBe(index);  // index should match
    expect(typeof resetAction.payload.index).toBe('number');  // index should match
  });

  // Test an action has the correct type and payload
  it('should create an action with type DELETE_TIMER and payload 77', () => {
    const index = 77;
    const deleteAction = deleteTimer(index);

    expect(typeof deleteAction).toBe('object');               // Should be an object
    expect(deleteAction.type).toBe(DELETE_TIMER);             // type should match
    expect(deleteAction.payload.index).toBe(index);           // index should match
    expect(typeof deleteAction.payload.index).toBe('number'); // index should match
  });

  // Test an action has the correct type and payload
  it('should create an action with type START_TIMER and payload 55', () => {
    const index = 55;
    const startAction = startTimer(index);

    expect(typeof startAction).toBe('object');               // Should be an object
    expect(startAction.type).toBe(START_TIMER);             // type should match
    expect(startAction.payload.index).toBe(index);           // index should match
    expect(typeof startAction.payload.index).toBe('number'); // index should match
  });

  // Test an action has the correct type and payload
  it('should create an action with type STOP_TIMER and payload 55', () => {
    const index = 55;
    const stopAction = stopTimer(index);

    expect(typeof stopAction).toBe('object');               // Should be an object
    expect(stopAction.type).toBe(STOP_TIMER);             // type should match
    expect(stopAction.payload.index).toBe(index);           // index should match
    expect(typeof stopAction.payload.index).toBe('number'); // index should match
  });

  // Test an action has the correct type and payload
  it('should create an action with type TOGGLE_TIMER and payload 33', () => {
    const index = 33;
    const toggleAction = toggleTimer(index);

    expect(typeof toggleAction).toBe('object');               // Should be an object
    expect(toggleAction.type).toBe(TOGGLE_TIMER);             // type should match
    expect(toggleAction.payload.index).toBe(index);           // index should match
    expect(typeof toggleAction.payload.index).toBe('number'); // index should match
  });

  // Test an action has the correct type and payload
  it('should create an action with type SELECT_TIMER and payload 66', () => {
    const index = 66;
    const selectAction = selectTimer(index);

    expect(typeof selectAction).toBe('object');               // Should be an object
    expect(selectAction.type).toBe(SELECT_TIMER);             // type should match
    expect(selectAction.payload.index).toBe(index);           // index should match
    expect(typeof selectAction.payload.index).toBe('number'); // index should match
  });
});
