import { Component } from 'react'
import bodycomponents from './index.module.css'
import TodoList from './todoList'

export default class Bodycomponents extends Component {
  render() {
    return (
        <div className={bodycomponents.container}>
            <TodoList/>            
        </div>
    )
  }
}
