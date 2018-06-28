import React from 'react'
import arrow_drop_down from '../../icons/arrow_drop_down.svg'
import arrow_drop_up from '../../icons/arrow_drop_up.svg'
import arrow_left from '../../icons/arrow_left.svg'
import arrow_right from '../../icons/arrow_right.svg'

class SettingPanel extends React.Component {
  render() {
    return (
      <div>
        <button className="reduce" onClick={this.props.reduceColumn}><img src={arrow_left} /></button>
        <span>{this.props.column}</span>
        <button className="add" onClick={this.props.addColumn}><img src={arrow_right} /></button>
        <button className="reduce" onClick={this.props.reduceRow}><img src={arrow_drop_down} /></button>
        <span>{this.props.row}</span>
        <button className="add" onClick={this.props.addRow}><img src={arrow_drop_up} /></button>
      </div>
    )
  }
}

export default SettingPanel
