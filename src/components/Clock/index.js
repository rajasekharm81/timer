import {Component} from 'react'
import './index.css'

class Clock extends Component {
  state = {date: new Date()}

  componentDidMount() {
    this.timerId = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  tick = () => {
    this.setState({date: new Date()})
  }

  render() {
    const {date} = this.state
    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <h1 className="time">{date.toLocaleTimeString()}</h1>
      </div>
    )
  }
}
export default Clock
