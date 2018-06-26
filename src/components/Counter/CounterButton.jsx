import React from "react";

class CounterButton extends React.Component {
  state = {
    value: 0
  }

  clickHandler = () => {
    this.setState({ value: this.state.value + 1 })
  }

  render() {
    return (
      <button onClick={this.clickHandler}>
        {this.state.value}
      </button>
    )
  }
}

export default CounterButton
