import React from 'react'
import PropTypes from 'prop-types'
import CounterButton from './CounterButton'

function CounterRow({ reset, row }) {
  let button = []

  for (let index = 0; index < row; index++) {
    button[index] = <CounterButton key={index} reset={reset} />
  }
  return <div>{button}</div>
}

CounterRow.propTypes = {
  reset: PropTypes.bool,
  row: PropTypes.number,
}

export default CounterRow
