import { Component } from 'react'
import todoFooter from './index.module.css'

export default class Footer extends Component {
  render() {
    return (
        <div className={todoFooter.container}> 
          <div className={todoFooter.main}>
              <input className={todoFooter.select} type='checkbox' style={{ transform: 'scale(1.2)'}}/>
              <span style={{ marginLeft: 5 + 'px'}}>
                已完成0/全部4
              </span>
          </div>
          <button className={todoFooter.deleteall}>删除所有</button>
        </div>
    )
  }
}
