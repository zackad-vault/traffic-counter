import React, { useState } from 'react'
import PropTypes from 'prop-types'
import CounterRow from './CounterRow'

function Counter({ column, row }) {
  const [reset, setReset] = useState(false)

  const resetHandler = () => {
    setReset(prevValue => !prevValue)
  }

  let counter = []

  for (let index = 0; index < row; index++) {
    counter[index] = <CounterRow row={column} key={index} reset={reset} />
  }

  return (
    <div className='text-center'>
      <button className='border px-2 py-1 mt-1 bg-gray-500' onClick={resetHandler}>
        Reset
      </button>
      {counter}
    </div>
  )
}

Counter.propTypes = {
  column: PropTypes.number,
  row: PropTypes.number,
}

export default Counter
