import React from 'react';
import Games from '../gameslist/Games.jsx';
import { Link } from 'react-router-dom';
import AddGameForm from '../gameslist/AddGameForm';
import SearchForm from './SearchForm';
import Results from './Results';
import { Header } from '../Header';
import Footer from '../footer/Footer'
import  FooterBottom  from '../footer/FooterBottom'
import { toggleSearchResults } from '../util/custom';

export default class Home extends React.Component{
  static defaultProps = {
    currentUser: []
  }

  constructor(props, _railsContext){
      super(props)
      this.state = {
        currentUser: this.props.currentUser, // To pass to SearchForm and Footer components
      }
  }

  componentDidMount () {
    toggleSearchResults()
  }

  // RENDERS SEARCH FORM AND FOOTER COMPONENTS
  render() {
    return (
      <div>
        <div className="home_header_bar">
          { this.state.currentUser ? <Link className='gameslist_link' to={ `/games/` }>My Games List</Link> : <Link className='gameslist_link' to={ `/` }>My Games List</Link>  }
        </div>

        <SearchForm currentUser={this.state.currentUser} />
        <Footer />
        <FooterBottom currentUser={this.state.currentUser} />
      </div>
    )
  }
}
