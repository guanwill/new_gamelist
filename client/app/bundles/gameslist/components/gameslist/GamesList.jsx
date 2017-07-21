import React from 'react';
import Game from './Game';

export const GamesList = ({games}) =>
  <div id="game_playing" className="tab-panee fadee inn active">
    <table className="tablee table-bordered">
      <thead>
        <tr>
          <th className="col-md-4 col-sm-4 playing-th"> Currently Playing </th>
          <th className="col-md-2 col-sm-2">Genre</th>
          <th className="col-md-2 col-sm-2">Platform</th>
          <th className="col-md-2 col-sm-2">Progress</th>
          <th className="col-md-2 col-sm-2">Release Date</th>
          <th></th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {games.map(function(game) {
          return (
              <Game game={game} key={game.id} />
          )
        })}
      </tbody>
    </table>
  </div>


GamesList.defaultProps = {
  games: []
}
