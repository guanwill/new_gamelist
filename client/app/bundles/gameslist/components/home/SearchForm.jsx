import React from 'react'
import { Link } from 'react-router-dom'

export default class SearchForm extends React.Component{

  createAjax = () => {
    const query = this.titleInput.value
    this.props.getQuery(query)
    this.props.searchthis(query)
    console.log(query)
    $('.divider-second-top p').text("Searching...")
  }

  // <h1 className="welcome-title"> MGL </h1>

  render() {
    return (
      <div className="search-div">
          <div className="welcome-div">
            <div className="api_form">
              <input type="text" ref={(input) => {this.titleInput = input}} className="ui-autocomplete-input gamename-input" placeholder="Search for a game"/>
              <button type="submit" className="search-game-button btn-primary" onClick={this.createAjax}><i className="fa fa-search" aria-hidden="true"></i></button>
            </div>

          </div>
      </div>
    )
  }
}
