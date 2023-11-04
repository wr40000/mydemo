import React, { Component } from 'react'
import todoHeader from './index.module.css'

export default class Header extends Component {
  render() {
    return (
      <div className={todoHeader.container}>
        <input className={todoHeader.search}/>
      </div>
    )
  }
}
