import React from 'react'
import Counter from '../Counter/Counter'

class Row extends React.Component {
  render() {
    let counter = []

    for (let index = 0; index < this.props.count; index++) {
      counter.push(<Counter index={index} />)
    }

    return (
      <div>
        {counter}
      </div>
    )
  }
}

export default Row
