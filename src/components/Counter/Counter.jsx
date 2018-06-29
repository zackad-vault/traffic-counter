import React from 'react'
import CounterRow from './CounterRow'

class Counter extends React.Component {
  constructor(props) {
    super(props)

    this.resetHandler = this.resetHandler.bind(this)
  }

  state = {
    reset: false,
    orientation: "portrait"
  }

  resetHandler = () => {
    this.setState({reset: true})
  }

  render() {
    let counter = []

    for (let index = 0; index < this.props.row; index++) {
      counter[index] = <CounterRow row={this.props.column} key={index} reset={this.state.reset} orientation={this.state.orientation} />
    }

    return (
      <div className={'counter ' + this.state.orientation}>
        <button onClick={this.resetHandler}>Reset</button>
        {counter}
      </div>
    )
  }
}

export default Counter
