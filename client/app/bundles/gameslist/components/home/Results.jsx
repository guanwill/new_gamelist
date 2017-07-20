import React from 'react';
import ResultItems from './ResultItems';
import { Link } from 'react-router-dom'

export default class Results extends React.Component{
  render() {

    if (this.props.currentUser != null) {
      console.log('results.jsx')
      console.log(this.props.currentUser)
      var currentUserName = this.props.currentUser
    }
    else {
      var currentUserName = ""
    }

    const resultItems = this.props.searchResults.map(function(result){
      return (
        <ResultItems key={result.id} gameResult={result} currentUser={currentUserName} />
      );
    });

    return (
      <div className="search-container">
        <div className="divider-second-top">
          <p></p>
        </div>
        <div className="search-container2">
          <div className="search-container2-overlay">
            <div className="search-results-container">
              {resultItems}
            </div>
          </div>
        </div>
        <div className="divider-top">
          <p><span> Build your own game list <Link to={ `/games/` }>here</Link> </span></p>
        </div>
      </div>
    );

  }
}
