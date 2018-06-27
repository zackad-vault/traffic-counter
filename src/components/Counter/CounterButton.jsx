import React from "react"
import './Counter.css'

class CounterButton extends React.Component {
  state = {
    value: 0
  }

  clickHandler = () => {
    this.setState({ value: this.state.value + 1 })
  }

  render() {
    return (
      <button onClick={this.clickHandler} className="counter__button">
        {this.state.value}
      </button>
    )
  }
}

export default CounterButton
