import { Component } from 'react'
import githubHeader from './index.module.css'
import axios from 'axios'

export default class GithubHeader extends Component {
  search = ()=> {
    const {keyWordElement:{value:keyWord}} = this    
    //发送网络请求
		axios.get(`/api1/search/users?q=${keyWord}`).then(
			response => {
				//请求成功后通知App更新状态
				this.props.saveUser(response.data.items)
			},
			error => {
        console.log('失败了', error);
			}
		)
  }
  render() {
    return (
      <div className={githubHeader.container}>
        <input ref={c => this.keyWordElement = c} className={githubHeader.githubSearch}
          placeholder='请输入要查询的用户昵称'/>
        <button onClick={this.search} style={{border:'none',transform:'scale(1.5)',
          marginLeft: 1.3 + 'rem',borderRadius: 5 + 'px',
          fontSize: 1.2 + 'rem', color: '#BD34FE',fontWeight:700}}>
            搜索
        </button>
      </div>
    )
  }
}
