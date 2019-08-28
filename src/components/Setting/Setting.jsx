import React from 'react'
import SettingPanel from './SettingPanel'

class Setting extends React.Component {
  render() {
    return (
      <div className='bg-gray-900 text-white text-xl py-1 flex justify-center'>
        <SettingPanel
          column={this.props.column}
          addColumn={this.props.addColumn}
          reduceColumn={this.props.reduceColumn}
          row={this.props.row}
          addRow={this.props.addRow}
          reduceRow={this.props.reduceRow}
        />
      </div>
    )
  }
}

export default Setting
