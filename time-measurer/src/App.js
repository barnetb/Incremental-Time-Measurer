import React, { Component } from 'react'
import Clock from './clock'
import Menu from './menu'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="menu">
          <Menu/>
        </div>
        <div className="clock">
          <Clock/>
        </div>
      </div>
    )
  }
}
  

