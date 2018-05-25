import React from "react"
import { shallow, mount, render, configure } from "enzyme"
import sinon from 'sinon'
import Adapter from 'enzyme-adapter-react-16'
import { createMockStore } from 'redux-test-utils'
import NewTimer from "./new-timer"

configure({ adapter: new Adapter() })

// make a function to wrap a component in a provider with a store.
export const shallowWithStore = (component, store) => {
  const context = {
    store
  }

  return shallow(component, { context });
}

// Render the whole component with store
export const mountWithStore = (component, store) => {
  const context = {
    store
  }

  return mount(component, { context });
}

describe("timer-view", () => {
  it('should render successfully', () => {
    const state = { toggleTimer: () => {} }
    const store = createMockStore(state)
    const newTimer = mountWithStore(<NewTimer />, store)
    // console.log(timerView.debug());
    expect(newTimer.find('.new-timer__input').length).toBe(1)
    expect(newTimer.find('.new-timer__button').length).toBe(1)
  })

  it('should call component did mount', () => {
    const state = { addTimer: () => {} }
    const store = createMockStore(state)
    // Use a spy to watch for function invocation - must do this before mount!
    sinon.spy(NewTimer.prototype, 'componentDidMount')
    sinon.spy(state, 'addTimer')
    const newTimer = mountWithStore(<NewTimer />, store)
    expect(NewTimer.prototype.componentDidMount.calledOnce).toBe(true)
    // ???
    // expect(NewTimer.props.addTimer.calledOnce).toBe(true)
  })
})
