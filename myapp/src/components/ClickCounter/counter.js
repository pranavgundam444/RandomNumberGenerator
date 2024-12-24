// Write your code here
import {Component} from 'react'

import './counter.css'

class ClickCounter extends Component {
  state = {
    count: 0,
  }

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="counter-container">
        <h1 className="counterheading">
          The Button has been clicked
          <br /> <span className="counter-value"> {count} </span> times
        </h1>
        <p className="description"> Click the button to increase the count </p>
        <div className="button-container">
          <button type="button" className="button" onClick={this.onIncrement}>
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
