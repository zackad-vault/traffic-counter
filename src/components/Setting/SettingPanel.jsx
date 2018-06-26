import React from 'react'

class SettingPanel extends React.Component {
  state = {
    column: 0,
    row: 0
  }

  addColumn = () => {
    this.setState({
      column: this.state.column + 1
    })
  }

  addRow = () => {
    this.setState({
      row: this.state.row + 1
    })
  }

  reduceColumn = () => {
    this.setState({
      column: this.state.column - 1
    })
  }

  reduceRow = () => {
    this.setState({
      row: this.state.row - 1
    })
  }

  render() {
    return (
      <div>
        Setting Panel
        <div>
          <button className="reduce" onClick={this.reduceColumn}>-</button>
          <input type="text" value={this.state.column}/>
          <button className="add" onClick={this.addColumn}>+</button>
        </div>
        <div>
          <button className="reduce" onClick={this.reduceRow}>-</button>
          <input type="text" value={this.state.row}/>
          <button className="add" onClick={this.addRow}>+</button>
        </div>
      </div>
    )
  }
}

export default SettingPanel
