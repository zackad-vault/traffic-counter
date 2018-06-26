import React from 'react'
import Counter from '../Counter/Counter.js'

const Row = ({ count }) => {
  let counter = []

  for (let index = 0; index < count; index++) {
    counter.push(<Counter index={index} />)
  }

  return (
    <div>
      {counter}
    </div>
  )
}

export default Row