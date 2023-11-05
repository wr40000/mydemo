import { Component } from 'react'
import searchResult from './index.module.css'
import SearchResultItem from '../SearchResultItem'

export default class SearchResult extends Component {
  render() {
    const {users} = this.props
    return (
      <div className={searchResult.container}>
        {
          users.map((user)=>{
            const {html_url, avatar_url, login, id} = user;
            const data =  {html_url, avatar_url, login}
            return <SearchResultItem {...data} key={id}/>
          })
        }
      </div>
    )
  }
}
