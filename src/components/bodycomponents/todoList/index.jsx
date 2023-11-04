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
  render() {
    return (
      <div className={todoList.container}>
        <Header addtodos={this.addtodos}/>
        <List todos={this.state.todos}/>
        <Footer/>
      </div>
    )
  }
}
