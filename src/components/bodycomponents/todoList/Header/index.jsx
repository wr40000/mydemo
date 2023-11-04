import { Component } from 'react'
import todoHeader from './index.module.css'
import { nanoid } from 'nanoid'

export default class Header extends Component {
  handler = (e)=> {
    const {target, keyCode} = e
    if(keyCode == 13){
      let value = target.value
      if(value.trim() === ''){
        alert('输入不可为空！')
        return
      }
      const todoObj = {id:nanoid(), name:value, done: false}
      this.props.addtodos(todoObj)
    }
  }
  render() {
    return (
      <div className={todoHeader.container}>
        <input className={todoHeader.search} onKeyUp={this.handler}/>
      </div>
    )
  }
}
