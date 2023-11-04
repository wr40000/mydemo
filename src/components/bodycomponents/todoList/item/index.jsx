import React, { Component } from 'react'
import todoItem from './index.module.css'

export default class Item extends Component {
  render() {
    return (
        <div className={todoItem.container}>
            <div>              
              <input type='checkbox'/><span>吃饭</span>
            </div>
            <button className={todoItem.delete} style={{height: 80+'%',width: 5+'rem',
              fontSize: 1.5+'rem', marginRight: 5+'px',
              background:'#F23B24',border:'none',
              borderRadius:5+'px',color:'#ffffff'}}>删除</button>
        </div>
    )
  }
}
