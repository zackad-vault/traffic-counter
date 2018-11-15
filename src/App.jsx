import React, { Component } from 'react'
import { set, get } from 'idb-keyval'
import './App.css'
import Counter from './components/Counter/Counter'
import Setting from './components/Setting/Setting'

class App extends Component {
  constructor(props) {
    super(props)

    this.addColumn = this.addColumn.bind(this)
    this.reduceColumn = this.reduceColumn.bind(this)
    this.addRow = this.addRow.bind(this)
    this.reduceRow = this.reduceRow.bind(this)
    this.maxColumn = 12
    this.maxRow = 12
  }

  state = {
    column: 1,
    row: 1
  }

  componentDidMount() {
    get('column').then(value => {
      if (value) {
        this.setState({ column: value })
      }
    })
    get('row').then(value => {
      if (value) {
        this.setState({ row: value })
      }
    })
  }

  addColumn = () => {
    let column = (this.state.column < this.maxColumn) ? this.state.column + 1 : this.maxColumn
    set('column', column).then(this.setState({ column: column }))
  }

  reduceColumn = () => {
    let column = (this.state.column > 1) ? this.state.column - 1 : 1
    set('column', column).then(this.setState({ column: column }))
  }

  addRow = () => {
    let row = (this.state.row < this.maxRow) ? this.state.row + 1 : this.maxRow
    set('row', row).then(this.setState({ row: row }))
  }

  reduceRow = () => {
    let row = (this.state.row > 1) ? this.state.row - 1 : 1
    set('row', row).then(this.setState({ row: row }))
  }

  render() {
    return (
      <div className="App">
        <Setting
          column={this.state.column}
          addColumn={this.addColumn}
          reduceColumn={this.reduceColumn}
          row={this.state.row}
          addRow={this.addRow}
          reduceRow={this.reduceRow} />
        <Counter column={this.state.column} row={this.state.row} />
      </div>
    )
  }
}

export default App
