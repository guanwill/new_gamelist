import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Games from './gameslist/Games';
import Game from './gameslist/Game';
import AddGameForm from './gameslist/AddGameForm';
import Home from './home/Home';

export default (props) => {
  return (
    <Router>
      <div>
        <Route exact path="/" render={routeProps => (
          <Home {...routeProps} games={props.games} currentUser={props.currentUser}/>
        )}/>

        <Route exact path="/games" render={routeProps => (
          <Games {...routeProps} games={props.games} currentUser={props.currentUser}/>
        )}/>

        <Route path="/games/:id/edit" component={AddGameForm} />
      </div>
    </Router>
  )
}
