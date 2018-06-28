import React from 'react'
import SettingPanel from './SettingPanel'
import './Setting.css'

class Setting extends React.Component {
  render() {
    return(
      <div>
        <SettingPanel
          column={this.props.column}
          addColumn={this.props.addColumn}
          reduceColumn={this.props.reduceColumn}
          row={this.props.row}
          addRow={this.props.addRow}
          reduceRow={this.props.reduceRow} />
      </div>
    )
  }
}

export default Setting
