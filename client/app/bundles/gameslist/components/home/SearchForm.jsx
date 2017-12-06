import React from 'react'
import { Link } from 'react-router-dom'

export default class SearchForm extends React.Component{

  // Grab user input data
  createAjax = (e) => {
    e.preventDefault()
    if (this.titleInput.value.trim() == "") {
      var query = "Nothing"
    }
    else {
      var query = this.titleInput.value
    }

    this.props.searchthis(query)
    console.log(query)
    $('.divider-second-top p').text("Searching...")
  }

  render() {
    return (
      <div className="search-div">
          <div className="welcome-div">
            <div className="api_form">
              <form className='form-group search-game-form' onSubmit={this.createAjax}>
                <input type="text" ref={(input) => {this.titleInput = input}} className="ui-autocomplete-input gamename-input" placeholder="Search for a game"/>
                <button type="button" onClick={this.createAjax} className="search-game-button btn-primary" ><i className="fa fa-search" aria-hidden="true"></i></button>
              </form>
            </div>

          </div>
      </div>
    )
  }
}
