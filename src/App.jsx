import React, { Component } from 'react'
// import { set, get } from 'idb-keyval'
import idbKeyval from './idb-keyval'
import logo from './logo.svg'
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
    this.maxRow = 6
  }

  state = {
    column: 1,
    row: 1
  }

  componentDidMount() {
    idbKeyval.get('column').then(value => this.setState({column: value}))
    idbKeyval.get('row').then(value => this.setState({row: value}))
  }

  addColumn = () => {
    let column = (this.state.column < this.maxColumn) ? this.state.column + 1 : this.maxColumn
    idbKeyval.set('column', column).then(this.setState({column: column}))
  }

  reduceColumn = () => {
    let column = (this.state.column > 1) ? this.state.column - 1 : 1
    idbKeyval.set('column', column).then(this.setState({ column: column }))
  }

  addRow = () => {
    let row = (this.state.row < this.maxRow) ? this.state.row + 1 : this.maxRow
    idbKeyval.set('row', row).then(this.setState({ row: row }))
  }

  reduceRow = () => {
    let row = (this.state.row > 1) ? this.state.row - 1 : 1
    idbKeyval.set('row', row).then(this.setState({row: row}))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
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
