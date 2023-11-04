import React, { Component } from 'react'
import todoFooter from './index.module.css'

export default class index extends Component {
  render() {
    return (
        <div className={todoFooter.container}> 
          <div className={todoFooter.main}>
              <input className={todoFooter.select} type='checkbox'/>
              <span>
                已完成0/全部4
              </span>
          </div>
        </div>
    )
  }
}
