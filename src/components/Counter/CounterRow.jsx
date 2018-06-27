import React from 'react'
import CounterButton from './CounterButton'

class CounterRow extends React.Component {
  render() {
    let button = []

    for (let index = 0; index < this.props.row; index++) {
      button[index] = <CounterButton />
    }
    return (
      <div>
        {button}
      </div>
    )
  }
}

export default CounterRow
