import React from 'react'
import CounterRow from './CounterRow'

class Counter extends React.Component {
  render() {
    let counter = []

    for (let index = 0; index < this.props.row; index++) {
      counter[index] = <CounterRow row={this.props.column} key={index} />
    }

    return <div>{counter}</div>
  }
}

export default Counter
