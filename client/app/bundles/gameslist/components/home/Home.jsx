import React from 'react';
import Games from '../gameslist/Games.jsx';
import { Link } from 'react-router-dom';
import AddGameForm from '../gameslist/AddGameForm';
import SearchForm from './SearchForm';
import Results from './Results';

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

  //for testing purposes for addgameform component, to test currentUser
  addGame = (game) => {
    const game_data = update(this.state.game_data, { $push: [game]});
    this.setState({
      game_data: game_data
    });
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

  // searchthis: function(URL, query){
  searchthis = (query) => {
    $.ajax({
      crossDomain: true,
      method: 'get',
      // dataType: 'jsonp',
      // jsonp: 'json_callback',
      // url: URL,
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

    console.log('home.jsx')
    console.log(this.state.currentUser)

    return (
      <div>
        {this.state.currentUser && (<Link to={ `/games/` }>See Gameslist</Link>)}
        {!this.state.currentUser && (<AddGameForm handleNewGame={this.addGame}/>)}

        <SearchForm getQuery={this.getQuery} searchthis={this.searchthis} />
        <Results currentUser={this.state.currentUser} searchResults={this.state.searchResults}/>

      </div>
    )
  }
}
