import { Component } from 'react'
import Item from '../item'
import todoList from './index.module.css'

export default class List extends Component {
  // console.log(this.props);
  render() {
    const {todos} = this.props;
    return (
        <div className={todoList.container}>
          {
            todos.map((todo)=>{              
              return <Item {...todo} key={todo.id}/>
            })
          }
        </div>
    )
  }
}
