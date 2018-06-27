import React from 'react'
import CounterButton from './CounterButton'
import CounterRow from './CounterRow'

class Counter extends React.Component {
  render() {
    let counter = []
    let key

    for (let index = 0; index < this.props.column; index++) {
      counter[index] = <CounterRow row={this.props.row} key={index} />
    }

    return <div>{counter}</div>
  }
}

export default Counter
