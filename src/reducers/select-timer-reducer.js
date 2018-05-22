import { SELECT_TIMER } from '../actions'

const selectTimerReducer = (state = null, action) => {
  switch (action.type) {
    case SELECT_TIMER:
      return state = action.payload.index
      break

    default:
      return state
  }
}

export default selectTimerReducer
