import React, { Component } from 'react'
import { connect } from 'react-redux'

import TimerTitle from './timer-title'

import { toggleTimer } from '../actions'
// import { formatTime } from '../utils'

import './timer-view.css'

class TimerView extends Component {

  componentDidMount() {

  }

  render() {
    const { name, time, isRunning } = this.props.timer
    const { index, toggleTimer } = this.props
    const buttonClass = isRunning ? "stop" : "start"

    return (
      <div className="timer-view">
        <TimerTitle {...this.props} />
        <button
          className={`timer-view__button timer-view__button--${buttonClass}`}
          onClick={(e) => {
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
