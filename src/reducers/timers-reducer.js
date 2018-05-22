import { NEW_TIMER, RESET_TIMER, DELETE_TIMER,
        START_TIMER, STOP_TIMER, TOGGLE_TIMER, UPDATE } from '../actions';

import Timer from './timer'
//                                action = {type:'TOGGLE_TIMER', payload: 1}
const timerReducer = (state = [], action) => {
  switch (action.type) {
    case UPDATE:
      return state.map((timer) => {
        if (timer.isRunning) {
          timer = {...timer, time: timer.time += action.payload.deltaTime }
        }
        return timer
      })

    case NEW_TIMER:
      const name = action.payload.name ? action.payload.name : `Timer ${state.length}`
      return [...state, new Timer(name)] // --> [33, 0]

    case RESET_TIMER:
      return state.map((timer, index) => {
        if (action.payload.index === index) {
          timer.time = 0
        }
        return timer
      })

    case DELETE_TIMER:
      return state.filter((timer, index) => {
        return action.payload.index !== index
      })

    case START_TIMER:
      return state.map((timer, index) => {
        if (action.payload.index === index) {
          timer.isRunning = true
        }
        return timer
      })

    case STOP_TIMER:
      return state.map((timer, index) => {
        if (action.payload.index === index) {
          timer.isRunning = false
        }
        return timer
      })

    case TOGGLE_TIMER:
      const newState = state.map((timer, index) => {
        if (action.payload.index === index) {
          return {...timer, isRunning: !timer.isRunning}
        }
        return timer
      })
      return newState

    default:
      return state;
  }
}

export default timerReducer;
