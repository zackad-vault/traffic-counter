import React from 'react'
import CounterButton from './CounterButton'

class Counter extends React.Component {
  render() {
    let counter = []
    let key

    for (let index = 0; index < this.props.column; index++) {
      counter[index] = []
      for (let indexRow = 0; indexRow < this.props.row; indexRow++) {
        key = index + '-' + indexRow
        counter[index][indexRow] = <CounterButton key={key}/>
      }
    }

    return <div>{counter}</div>
  }
}

export default Counter
