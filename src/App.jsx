import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Counter from './components/Counter/Counter'
import Setting from './components/Setting/Setting'

class App extends Component {
  state = {
    column: 0,
    row: 0
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
        <Setting />
      </div>
    )
  }
}

export default App
