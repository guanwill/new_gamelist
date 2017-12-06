import React from 'react'
import { Link } from 'react-router-dom'
import Results from './Results';


export default class SearchForm extends React.Component{
  static defaultProps = {
    searchResults: [],
  }

  constructor(props, _railsContext){
    super(props)
    this.state = {
      searchResults: [], // To pass data to Results child component
      currentUser: this.props.currentUser, // Grab currentuser props from parent component pass this to the Results child component
    }
  }

  // Search function
  searchGame = (query) => {
    $.ajax({
      crossDomain: true,
      method: 'get',
      url: window.location.origin + '/getsearchresults/' + query,
      success: function(response){
        var results_count = response.results.length
        console.log(response)
        // Grabs results from the response and update searchResults props so we could pass it to Results child component
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

  // Grab user input data
  initiateSearch = (e) => {
    e.preventDefault()
    if (this.titleInput.value.trim() == "") {
      var query = "Nothing"
    }
    else {
      var query = this.titleInput.value
    }

    // Initiate Search
    this.searchGame(query)
    console.log(query)
    $('.divider-second-top p').text("Searching...")
  }

  render() {
    return (
      <div>
        <div className="search-div">
            <div className="welcome-div">
              <div className="api_form">
                <form className='form-group search-game-form' onSubmit={this.initiateSearch}>
                  <input type="text" ref={(input) => {this.titleInput = input}} className="ui-autocomplete-input gamename-input" placeholder="Search for a game"/>
                  <button type="button" onClick={this.initiateSearch} className="search-game-button btn-primary" ><i className="fa fa-search" aria-hidden="true"></i></button>
                </form>
              </div>

            </div>
        </div>

        <Results currentUser={this.state.currentUser} searchResults={this.state.searchResults}/>
      </div>
    )
  }
}
