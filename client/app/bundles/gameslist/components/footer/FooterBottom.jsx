import React from 'react'
import { Link } from 'react-router-dom'

export default class Results extends React.Component{

  // This is the footer nav with external links
  render () {
    return(
      <div className="footer-bottom">
        <Link className='footer-a' to={ `/` }>Home</Link>
        <a target="_blank" href='https://github.com/guanwill/new_gamelist'><i className="fa fa-github fa-3x" aria-hidden="true"></i></a>
        {this.props.currentUser ? <Link className='footer-a' to={ `/games/` }>Games</Link> : <a className="footer-a" href="/users/sign_up">Sign Up</a> }
      </div>
    )
  }
}
