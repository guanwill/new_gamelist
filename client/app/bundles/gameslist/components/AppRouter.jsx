import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Games from './gameslist/Games';
import Game from './gameslist/Game';
import AddGameForm from './gameslist/AddGameForm';

export default (props) => {
  return (
    <Router>
      <div>
        <Route exact path="/games" render={routeProps => (
          <Games {...routeProps} games={props.games}/>
        )}/>
        <Route path="/games/:id/edit" component={AddGameForm} />
      </div>
    </Router>
  )
}
