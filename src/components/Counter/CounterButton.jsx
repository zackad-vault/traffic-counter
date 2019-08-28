import React from 'react'

class CounterButton extends React.Component {
  state = {
    value: 0,
  }

  clickHandler = () => {
    this.setState({ value: this.state.value + 1 })
  }

  componentWillReceiveProps() {
    if (this.props.reset) {
      this.setState({ value: 0 })
    }
  }

  render() {
    return (
      <button onClick={this.clickHandler} className='w-12 h-12 mr-1 mt-1 border'>
        {this.state.value}
      </button>
    )
  }
}

export default CounterButton
