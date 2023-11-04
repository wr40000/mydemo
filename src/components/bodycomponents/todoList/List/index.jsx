import React, { Component } from 'react'
import Item from '../item'
import todoList from './index.module.css'

export default class List extends Component {
  render() {
    return (
        <div className={todoList.container}>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
        </div>
    )
  }
}
