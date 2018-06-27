import React from 'react'
import SettingButton from './SettingButton'
import SettingPanel from './SettingPanel'

class Setting extends React.Component {
  render() {
    return(
      <div>
        <SettingButton />
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
