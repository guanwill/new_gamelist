// Currently not being used
import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () =>
  <div className="home_header_bar">
    <Link className='gameslist_link' to={ `/games/` }>My Games List</Link>
  </div>
