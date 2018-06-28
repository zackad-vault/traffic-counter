import React from 'react'

class SettingPanel extends React.Component {
  render() {
    return (
      <div>
        <button className="reduce" onClick={this.props.reduceColumn}>-</button>
        <input type="text" value={this.props.column} />
        <button className="add" onClick={this.props.addColumn}>+</button>
        <button className="reduce" onClick={this.props.reduceRow}>-</button>
        <input type="text" value={this.props.row} />
        <button className="add" onClick={this.props.addRow}>+</button>
      </div>
    )
  }
}

export default SettingPanel
