import React, { Component } from 'react'
import { formatTime } from '../utils';


import './timer-view.css'

class TimerTitle extends Component {

  render() {
    const { name, time } = this.props.timer
    // { name:"Hello", time: 0, isRunning: false }

    return (
      <div>
        <h2 className="timer-view-name__h2">{name}</h2>
        <h1 className="timer-view-time__h1">{formatTime(time)}</h1>
        <small>{time}</small>
      </div>
    )
  }
}

export default TimerTitle
