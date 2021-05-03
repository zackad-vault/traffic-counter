import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

function CounterButton({ reset }) {
  const [value, addValue] = useState(0)

  useEffect(() => {
    if (reset) {
      addValue(0)
      // TODO revert `reset` state into false
    }
  }, [reset])

  return (
    <button onClick={() => addValue(prevValue => prevValue + 1)} className='w-12 h-12 mr-1 mt-1 border'>
      {value}
    </button>
  )
}

CounterButton.propTypes = {
  reset: PropTypes.bool,
}

export default CounterButton
