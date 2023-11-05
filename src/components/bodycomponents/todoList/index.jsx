import { Component } from 'react'
import todoList from './index.module.css'
import Header from './Header'
import List from './List'
import Footer from './Footer'

export default class TodoList extends Component {
  state = {todos:[
    {id:'001', name:'Terraria', done:false},
    {id:'002', name:'GenShin', done:true},
    {id:'003', name:'Star Rail', done:true},
  ]};

  addtodos = (todoObj)=>{
    const newtodos = [todoObj, ...this.state.todos];
    this.setState({todos: newtodos})
  }
  changetodos = (id, done)=>{
    let newtodos = this.state.todos.map((todo)=>{
      if(todo.id == id){
        return {...todo, done}
      }else{
        return todo
      }
    })
    this.setState({todos:newtodos})
  }
  deleteTodos = (id)=>{
    let newtodos = this.state.todos.filter((todo)=>{
      return todo.id != id
    })
    this.setState({todos: newtodos})
  }
  doneAllTodos = (checked)=> {
    const newtodos = this.state.todos.map((todo)=>{
      todo.done = checked
      return todo
    })
    this.setState({todos: newtodos})
  }
  deleteAllDoneTodo = () => {
      const newtodos = this.state.todos.filter((todo)=>{
          return todo.done == false
        }
      )
      this.setState({todos: newtodos})
  }
  render() {
    return (
      <div className={todoList.container}>
        <Header addtodos={this.addtodos}/>
        <List todos={this.state.todos} changetodos={this.changetodos} deleteTodos={this.deleteTodos}/>
        <Footer todos={this.state.todos} doneAllTodos={this.doneAllTodos} deleteAllDoneTodo={this.deleteAllDoneTodo}/>
      </div>
    )
  }
}
