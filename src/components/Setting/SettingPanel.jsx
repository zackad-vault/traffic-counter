import React from 'react'
import ArrowDown from '../../icons/arrow_drop_down.svg'
import ArrowUp from '../../icons/arrow_drop_up.svg'
import ArrowLeft from '../../icons/arrow_left.svg'
import ArrowRight from '../../icons/arrow_right.svg'

class SettingPanel extends React.Component {
  render() {
    return (
      <div className="setting__bar">
        <button className="reduce" onClick={this.props.reduceColumn}><img src={ArrowLeft} alt="Reduce Column" /></button>
        <span>{this.props.column}</span>
        <button className="add" onClick={this.props.addColumn}><img src={ArrowRight} alt="Add Column" /></button>
        <button className="reduce" onClick={this.props.reduceRow}><img src={ArrowDown} alt="Reduce Row" /></button>
        <span>{this.props.row}</span>
        <button className="add" onClick={this.props.addRow}><img src={ArrowUp} alt="Add Row" /></button>
      </div>
    )
  }
}

export default SettingPanel
