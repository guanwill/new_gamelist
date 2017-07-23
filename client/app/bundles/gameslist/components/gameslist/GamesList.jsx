import React from 'react';
import Game from './Game';

export const GamesList = ({games}) =>
<div className="tab-content">

  <div id="game_playing" className="tab-pane fade in active">

    <table className="tablee table-bordered">
      <thead>
        <tr>
          <th className="col-md-4 col-sm-4 playing-th"> Currently Playing PS4 </th>
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
          if (game.platform == 'PS4' && game.progress != '0%' && game.progress != '100% Storyline' && game.progress != '100% Completion' && game.progress != 'Wish' && game.progress != 'Contemplating' && game.progress != 'On hold') {
            return (
                <Game game={game} key={game.id} />

            )
          }
        })}
      </tbody>
    </table>

    <table className="tablee table-bordered">
      <thead>
        <tr>
          <th className="col-md-4 col-sm-4 playing-th"> NIN 3DS</th>
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
          if (game.platform == "Nin 3DS " && game.progress != '0%' && game.progress != '100% Storyline' && game.progress != '100% Completion' && game.progress != 'Wish' && game.progress != 'Contemplating' && game.progress != 'On hold') {
            return (
                <Game game={game} key={game.id} />

            )
          }
        })}
      </tbody>
    </table>


  </div>

  <div id="game_start" className="tab-pane fade in">
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
          if (game.progress == '0%' || game.progress == 'On hold') {
            return (
                <Game game={game} key={game.id} />
            )
          }
        })}
      </tbody>
    </table>
  </div>


  <div id="game_completed" className="tab-pane fade in">
    <table className="tablee table-bordered">
      <thead>
        <tr>
          <th className="col-md-4 col-sm-4 playing-th"> Currently completed </th>
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

  <div id="game_wish" className="tab-pane fade in">
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

</div>

GamesList.defaultProps = {
  games: []
}
