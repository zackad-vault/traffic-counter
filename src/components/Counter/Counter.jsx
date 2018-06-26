import React from 'react'
import CounterButton from './CounterButton'

class Counter extends React.Component {
  render() {
    let counter = []

    for (let index = 0; index < this.props.column; index++) {
      counter[index] = []
      for (let indexRow = 0; indexRow < this.props.row; indexRow++) {
        counter[index][indexRow] = <CounterButton />
      }
    }

    return <div>{counter}</div>
  }
}

export default Counter
