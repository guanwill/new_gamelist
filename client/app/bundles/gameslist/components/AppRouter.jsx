import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'; //calling browserrouter as Router.
import Games from './Games';
import Game from './Game';

// <Route exact path="/games" render={props => (
//   <Games {...props} games={props.games}/>
// )}/>
// <Route exact path="/games" component={Games} />

export default (props) => {
  return (
    <Router>
      <div>
        <Route path="/games" render={routeProps => (
          <Games {...routeProps} games={props.games}/>
        )}/>

        <Route exact path="/game/:id" component={Game} />
      </div>
    </Router>
  )
}
