import React, { Component } from 'react'
import { connect } from 'react-redux'

import { toggleTimer } from '../actions'

import './timer-view.css'

class TimerView extends Component {
  constructor(props) {
    super(props)

  }

  formatTime(time) {
    const ms = Math.round(time / 100)
    const secs = Math.floor(time / 1000)
    const mins = Math.floor(secs / 60)
    const hrs = Math.floor(mins / 60)
    return `${hrs % 60}:${mins % 60}:${secs % 60}.${ms % 10}`
  }

  render() {
    const { name, time, isRunning } = this.props.timer
    const { index, toggleTimer } = this.props
    const buttonClass = isRunning ? "stop" : "start"

    return (
      <div className="timer-view">
        <div>
          <h2 className="timer-view-name__h2">{name}</h2>
          <h1 className="timer-view-time__h1">{this.formatTime(time)}</h1>
          <small>{time}</small>
        </div>
        <button
          className={`timer-view__button timer-view__button--${buttonClass}`}
          onClick={(e) => {
            // store.dispatch(toggleTimer(index))
            // store.dispatch({type:'TOGGLE', payload: 1})
            toggleTimer(index)
          }}>{isRunning ? "Stop" : "Start"}</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = () => {
  return { toggleTimer }
}

export default connect(mapStateToProps, mapDispatchToProps())(TimerView)
