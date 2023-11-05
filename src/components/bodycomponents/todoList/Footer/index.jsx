import { Component } from 'react'
import todoFooter from './index.module.css'

export default class Footer extends Component {
  toDoneAllTodos = (e)=> {
    return this.props.doneAllTodos(e.target.checked)
  }
  deleteAllDone = ()=> {
    return this.props.deleteAllDoneTodo()
  }
  render() {
    const todos = this.props.todos
    let computedTodos = todos.reduce((pre, current)=>{
      return pre + (current.done == true ? 1 : 0)
    }, 0)
    return (
        <div className={todoFooter.container} style={{display: todos.length == 0 ? 'none' : 'flex'}}> 
          <div className={todoFooter.main}>
              <input className={todoFooter.select} type='checkbox'
                style={{ transform: 'scale(1.2)'}}
                checked={(computedTodos == todos.length && todos.length != 0) ? true : false}
                onChange={this.toDoneAllTodos}/>
                  <span style={{ marginLeft: 5 + 'px'}}>
                    已完成{computedTodos}/全部{todos.length}
                  </span>
          </div>
          <button className={todoFooter.deleteall} onClick={this.deleteAllDone}>删除已完成</button>
        </div>
    )
  }
}
