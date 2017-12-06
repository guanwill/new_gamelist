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
    searchResults: [],
    currentUser: []
  }

  constructor(props, _railsContext){
      super(props)
      this.state = {
        searchResults: [], // To pass data to Results component
        currentUser: this.props.currentUser, // To pass to Results, and then ResultsItems components + Footer component
      }
  }

  // SEARCH FOR GAME FUNCTION
  searchthis = (query) => {
    $.ajax({
      crossDomain: true,
      method: 'get',
      url: window.location.origin + '/getsearchresults/' + query,
      success: function(response){
        var results_count = response.results.length
        console.log(response)
        // Grabs results from the response and update searchResults props so we could pass it to Results Component
        this.setState({searchResults: response.results})
        // Depending on results_count, display relevant text to users to let them know the results
        if (response.error == "OK"){
          if (results_count == 0){
            $('.divider-second-top p').text("No results")
          }
          else {
            $('.divider-second-top p').text("Search Results for: " + query)
          }
        }
        else {
          $('.divider-second-top p').text("")
        }
      }.bind(this),
    });
  }

  componentDidMount () {
    toggleSearchResults()
  }

  // RENDERS SEARCH FORM, SEARCH RESULTS, AND FOOTER COMPONENTS
  render() {
    return (
      <div>
        <div className="home_header_bar">
          { this.state.currentUser ? <Link className='gameslist_link' to={ `/games/` }>My Games List</Link> : <Link className='gameslist_link' to={ `/` }>My Games List</Link>  }
        </div>

        <SearchForm searchthis={this.searchthis} />
        <Results currentUser={this.state.currentUser} searchResults={this.state.searchResults}/>
        <Footer />
        <FooterBottom currentUser={this.state.currentUser} />
      </div>
    )
  }
}
