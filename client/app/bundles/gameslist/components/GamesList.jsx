import React from 'react';
import Game from './Game';

export const GamesList = ({games}) =>
  <div>
    <p>gameslist component</p>
    {games.map(function(game) {
      return (
        <div key={game.id} >
          <Game game={game} />
        </div>
      )
    })}
  </div>

GamesList.defaultProps = {
  games: []
}
