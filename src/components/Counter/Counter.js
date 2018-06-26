import React from 'react'

class Counter extends React.Component {
  constructor(props) {
    super(props)

    this.state = {value: 0}
  }

  clickHandler = () => {
    this.setState({value: this.state.value + 1})
  }

  render() {
    return (
      <button
        onClick={this.clickHandler}
        className={`counter-${this.props.index}`}
      >
        {this.state.value}
      </button>
    )
  }
}

export default Counter
