import { Component } from 'react'
import githubsearch from './index.module.css'
import GithubHeader from './Header'
import SearchResult from './SearchResult'

export default class Githubsearch extends Component {
  state = { //初始化状态
		users:[], //users初始值为数组
	} 

  saveUser = (users)=> {
    this.setState({users})
  }
  render() {
    const {users} = this.state
    return (
        <div className={githubsearch.container}>
          <GithubHeader/>
          <SearchResult users={users}/>
        </div>
    )
  }
}
