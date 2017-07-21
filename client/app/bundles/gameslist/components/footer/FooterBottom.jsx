import React from 'react'
import { Link } from 'react-router-dom'

export const FooterBottom = () =>
  <div className="footer-bottom">
    <Link className='footer-a' to={ `/` }>Home</Link>
    <a target="_blank" href='https://github.com/guanwill/new_gamelist'><i className="fa fa-github fa-3x" aria-hidden="true"></i></a>
    <Link className='footer-a' to={ `/games/` }>Games</Link>
  </div>
