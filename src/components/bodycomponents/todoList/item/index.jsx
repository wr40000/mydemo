import { Component } from 'react'
import todoItem from './index.module.css'

export default class Item extends Component {
  state = {
    mouse:false
  }
  handlemouse = (flag)=>{
    return ()=>{
      // console.log(this.props.name, flag);
      this.setState({mouse:flag})
    }
  }
  
  changeTodoDone = (id)=>{
    return (e) => {
      this.props.changetodos(id, e.target.checked)
    }
  }
  deleteTodoDone = (id)=>{
    return () => {
      if(window.confirm('确定删除吗？')){
        this.props.deleteTodos(id)
      }
    }
  }
  render() {
    const {id, name, done} = this.props;
    const {mouse} = this.state;
    return (
        <div className={todoItem.container} onMouseEnter={this.handlemouse(true)}
           onMouseLeave={this.handlemouse(false)}>
            <div className={todoItem.left} style={{marginLeft: 10 + 'px'}}>              
              <input type='checkbox' checked={done} style={{ transform: 'scale(1.2)'}}
                onChange={this.changeTodoDone(id)}/>
                <span style={{marginLeft: 5 + 'px' , width: 5 + 'rem',whiteSpace:'nowrap'}}>
                  {name}
                </span>   
              <img style={{transform: 'scale(0.35)', opacity: mouse ? 1 : 0,
              transition: 'all 0.5s linear'
              }} src="../../../public/svg/ice.svg" alt="SVG" />         
            </div>
            <button className={todoItem.delete} onClick={this.deleteTodoDone(id)}>删除</button>
        </div>
    )
  }
}
