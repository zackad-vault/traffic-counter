import React from 'react'
import CounterRow from './CounterRow'

class Counter extends React.Component {
  state = {
    reset: false
  }

  resetHandler = () => {
    this.setState({reset: true})
  }

  render() {
    let counter = []

    for (let index = 0; index < this.props.row; index++) {
      counter[index] = <CounterRow row={this.props.column} key={index} reset={this.state.reset}/>
    }

    return (
      <div>
        <button onClick={this.resetHandler}>Reset</button>
        {counter}
      </div>
    )
  }
}

export default Counter
