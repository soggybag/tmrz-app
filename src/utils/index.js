const TMRZ_STATE = "TMRZ_STATE"

// Load State
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(TMRZ_STATE)
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch(err) {
    return undefined
  }
}

// Save State
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(TMRZ_STATE, serializedState)
  } catch(err) {
    console.log("Error saving data")
  }
}

export const formatTime = (time) => {
  const ms = Math.round(time / 100)
  const secs = Math.floor(time / 1000)
  const mins = Math.floor(secs / 60)
  const hrs = Math.floor(mins / 60)
  return `${hrs % 60}:${mins % 60}:${secs % 60}.${ms % 10}`
}
