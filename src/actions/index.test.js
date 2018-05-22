// We'll be testing this actions
import { NEW_TIMER, addTimer, UPDATE, update } from './index'

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
    expect(expected.type).toBe(tested.type);                  // match the type
    expect(typeof expected.payload.deltaTime).toBe('number'); // check the value type
    expect(expected.payload.deltaTime).toBe(deltaTime);       // match the value
  })
});
