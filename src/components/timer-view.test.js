import React from "react";
import { shallow, mount, render, configure } from "enzyme";
import sinon from 'sinon'
import Adapter from 'enzyme-adapter-react-16';
import { createMockStore } from 'redux-test-utils';
import TimerView from "./timer-view";
import TimerTitle from './timer-title';
import Timer from '../reducers/timer';

configure({ adapter: new Adapter() })

// https://medium.com/@visualskyrim/test-your-redux-container-with-enzyme-a0e10c0574ec
// https://medium.com/netscape/testing-a-react-redux-app-using-jest-and-enzyme-b349324803a9

// make a function to wrap a component in a provider with a store.
export const shallowWithStore = (component, store) => {
  const context = {
    store
  };

  return shallow(component, { context });
};

// Render the whole component with store
export const mountWithStore = (component, store) => {
  const context = {
    store
  };

  return mount(component, { context });
};

describe("timer-view", () => {
  it('should render successfully', () => {
    const name = 'Name of Timer'
    const timer = new Timer(name)
    const state = { toggleTimer: () => {} }
    const store = createMockStore(state)
    const timerView = mountWithStore(<TimerView timer={timer} />, store)
    // console.log(timerView.debug());
    expect(timerView.find('.timer-view__button').length).toBe(1)
    expect(timerView.find('.timer-view__button').text()).toBe("Start")
    expect(timerView.props().timer.name).toBe(name)
  });

  it('should call component did mount', () => {
    const name = 'Name of Timer'
    const timer = new Timer(name)
    const state = { toggleTimer: () => {} }
    const store = createMockStore(state)
    // Use a spy to watch for function invocation - must do this before mount!
    sinon.spy(TimerView.prototype, 'componentDidMount')
    const timerView = mountWithStore(<TimerView timer={timer} />, store)
    expect(TimerView.prototype.componentDidMount.calledOnce).toBe(true)
  })
});
