import React, { Component } from 'react'
import todoList from './index.module.css'
import Header from './Header'
import List from './List'
import Footer from './Footer'

export default class TodoList extends Component {
  render() {
    return (
      <div className={todoList.container}>
        <Header/>
        <List/>
        <Footer/>
      </div>
    )
  }
}
