import { Component } from 'react'
import searchResult from './index.module.css'

export default class SearchResultItem extends Component {
  render() {
    const {html_url, avatar_url, login} = this.props
    return (
      <div className={searchResult.container}>
        <div className={searchResult.card} style={{width: 50 + 'px',height: 50 + 'px'}}>
          <a rel='noreferrer' href={html_url} target="_blank">
            <img src={avatar_url}
               style={{width: 28 + 'px'}} alt='head_portrait'/>
          </a>
          <p className="cardText" style={{margin: 0,fontSize: 1 + 'rem'}}>{login}</p>
        </div>
      </div>
    )
  }
}
