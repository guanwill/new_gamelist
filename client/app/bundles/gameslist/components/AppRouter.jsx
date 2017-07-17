import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Games from './Games';
import Game from './Game';

export default (props) => {
  return (
    <Router>
      <div>
        <Route path="/games" render={routeProps => (
          <Games {...routeProps} games={props.games}/>
        )}/>

        <Route exact path="/games/:id" component={Game} />
      </div>
    </Router>
  )
}
