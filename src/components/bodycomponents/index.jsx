import { Component } from 'react'
import bodycomponents from './index.module.css'
import TodoList from './todoList'
import Githubsearch from './githubsearch'

export default class Bodycomponents extends Component {
  render() {
    return (
        <div className={bodycomponents.container}>
            <TodoList/>   
            <Githubsearch/>         
        </div>
    )
  }
}
