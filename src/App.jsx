import React, { Component } from 'react'
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
  }

  state = {
    column: 1,
    row: 1
  }

  addColumn = () => {
    this.setState({
      column: this.state.column + 1
    })
  }

  reduceColumn = () => {
    this.setState({
      column: ((this.state.column > 0) ? this.state.column - 1 : 0)
    })
  }

  addRow = () => {
    this.setState({
      row: this.state.row + 1
    })
  }

  reduceRow = () => {
    this.setState({
      row: ((this.state.row > 0) ? this.state.row - 1 : 0)
    })
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
        <Counter column={this.state.column} row={this.state.row} />
        <Setting
          column={this.state.column}
          addColumn={this.addColumn}
          reduceColumn={this.reduceColumn}
          row={this.state.row}
          addRow={this.addRow}
          reduceRow={this.reduceRow} />
      </div>
    )
  }
}

export default App
