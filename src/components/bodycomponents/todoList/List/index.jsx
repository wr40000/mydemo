import { Component } from 'react'
import Item from '../item'
import todoList from './index.module.css'
import PropTypes from 'prop-types'

export default class List extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    changetodos: PropTypes.func.isRequired,
    deleteTodos: PropTypes.func.isRequired,
  }
  render() {
    const {todos, changetodos, deleteTodos} = this.props;
    return (
        <div className={todoList.container}>
          {
            todos.map((todo)=>{              
              return <Item {...todo} key={todo.id} changetodos={changetodos} deleteTodos={deleteTodos}/>
            })
          }
        </div>
    )
  }
}
