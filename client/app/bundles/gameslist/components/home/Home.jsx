import React from 'react';
import Games from '../gameslist/Games.jsx';
import { Link } from 'react-router-dom';
import AddGameForm from '../gameslist/AddGameForm';
import SearchForm from './SearchForm';
import Results from './Results';
import { Header } from '../Header';
import Footer from '../footer/Footer'

export default class Home extends React.Component{
  static defaultProps = {
    searchResults: [],
    query_array: [],
    currentUser: []
  }

  // Grab initial state of data and past them to GamesList component
  constructor(props, _railsContext){
      super(props)
      console.log('props')
      console.log(props)
      console.log(props.games)
      this.state = {
        searchResults: [],
        query_array: [],
        currentUser: this.props.currentUser,
      }
  }

  getQuery = (query) => {
    this.setState({
      query_array: query
    })
  }

  showResults = (response) => {
    this.setState({
      searchResults: response.results,
    })
  }

  searchthis = (query) => {
    $.ajax({
      crossDomain: true,
      method: 'get',
      url: window.location.origin + '/getsearchresults/' + query,
      success: function(response){
        var results_count = response.results.length
        console.log(response)
        this.showResults(response);
        if (response.error == "OK"){
          if (results_count == 0){
            $('.divider-second-top p').text("No results")
          }
          else {
            $('.divider-second-top p').text("Search Results for: " + this.state.query_array)
          }
        }
        else {
          $('.divider-second-top p').text("")
        }
      }.bind(this),
    });
  }

  render() {
    console.log(this.state.currentUser)

    return (
      <div>
        <div className="home_header_bar">
          <Link className='gameslist_link' to={ `/games/` }>My Games List</Link>
        </div>

        <Footer />
        <SearchForm getQuery={this.getQuery} searchthis={this.searchthis} />
        <Results currentUser={this.state.currentUser} searchResults={this.state.searchResults}/>
      </div>
    )
  }
}
