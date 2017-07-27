import React from 'react';
import Game from './Game';

export const GamesList = ({games}) =>
<div className="tab-content">

  <div id="game_playing" className="tab-pane fade in active">
    <div className="row">
      <div className="col-md-3 col-sm-12">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th className="col-md-6 col-sm-6 ps-playing-th">PLAYSTATION</th>
            </tr>
          </thead>
          <tbody className="ps-playing-body">
            {games.map(function(game) {
              if ((game.platform == 'PS4' || game.platform == 'PS Vita') && (game.progress != '0%' && game.progress != '100% Storyline' && game.progress != '100% Completion' && game.progress != 'Wish' && game.progress != 'Contemplating' && game.progress != 'On hold')) {
                return (
                    <Game game={game} key={game.id} />
                )
              }
            })}
          </tbody>
        </table>
      </div>

      <div className="col-md-3 col-sm-12">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th className="col-md-6 col-sm-6 x-playing-th">XBOX</th>
              </tr>
            </thead>
            <tbody className="x-playing-body">
              {games.map(function(game) {
                if ((game.platform == "XBOX One") && (game.progress != '0%' && game.progress != '100% Storyline' && game.progress != '100% Completion' && game.progress != 'Wish' && game.progress != 'Contemplating' && game.progress != 'On hold')) {
                  return (
                      <Game game={game} key={game.id} />
                  )
                }
              })}
            </tbody>
          </table>
      </div>
      <div className="col-md-3 col-sm-12">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th className="col-md-6 col-sm-6 nin-playing-th">NINTENDO</th>
              </tr>
            </thead>
            <tbody className="nin-playing-body">
              {games.map(function(game) {
                if ((game.platform == "Nin 3DS" || game.platform == "Nin Switch") && (game.progress != '0%' && game.progress != '100% Storyline' && game.progress != '100% Completion' && game.progress != 'Wish' && game.progress != 'Contemplating' && game.progress != 'On hold')) {
                  return (
                      <Game game={game} key={game.id} />
                  )
                }
              })}
            </tbody>
          </table>
      </div>

      <div className="col-md-3 col-sm-12">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th className="col-md-6 col-sm-6 pc-playing-th">PC</th>
              </tr>
            </thead>
            <tbody className="pc-playing-body">
              {games.map(function(game) {
                if ((game.platform == "PC") && (game.progress != '0%' && game.progress != '100% Storyline' && game.progress != '100% Completion' && game.progress != 'Wish' && game.progress != 'Contemplating' && game.progress != 'On hold')) {
                  return (
                      <Game game={game} key={game.id} />
                  )
                }
              })}
            </tbody>
          </table>
      </div>
    </div>
  </div>


  <div id="game_start" className="tab-pane fade in">
    <div className="row row-eq-height">
      <div className="col-md-3">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th className="col-md-4 col-sm-4 ps-start-th">PLAYSTATION</th>
            </tr>
          </thead>
          <tbody className="ps-start-body">
            {games.map(function(game) {
              if ((game.platform == 'PS4' || game.platform == 'PS Vita') && (game.progress == '0%' || game.progress == 'On hold')) {
                return (
                    <Game game={game} key={game.id} />
                )
              }
            })}
          </tbody>
        </table>
      </div>
      <div className="col-md-3">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th className="col-md-4 col-sm-4 x-start-th">XBOX</th>
            </tr>
          </thead>
          <tbody className="x-start-body">
            {games.map(function(game) {
              if ((game.platform == 'XBOX One') && (game.progress == '0%' || game.progress == 'On hold')) {
                return (
                    <Game game={game} key={game.id} />
                )
              }
            })}
          </tbody>
        </table>
      </div>
      <div className="col-md-3">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th className="col-md-4 col-sm-4 nin-start-th">NINTENDO</th>
            </tr>
          </thead>
          <tbody className="nin-start-body">
            {games.map(function(game) {
              if ((game.platform == "Nin 3DS" || game.platform == "Nin Switch") && (game.progress == '0%' || game.progress == 'On hold')) {
                return (
                    <Game game={game} key={game.id} />
                )
              }
            })}
          </tbody>
        </table>
      </div>
      <div className="col-md-3">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th className="col-md-4 col-sm-4 pc-start-th">PC</th>
            </tr>
          </thead>
          <tbody className="pc-start-body">
            {games.map(function(game) {
              if ((game.platform == 'PC') && (game.progress == '0%' || game.progress == 'On hold')) {
                return (
                    <Game game={game} key={game.id} />
                )
              }
            })}
          </tbody>
        </table>
      </div>
    </div>
  </div>





  <div id="game_completed" className="tab-pane fade in">
    <div className="row row-eq-height">
      <div className="col-md-3">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th className="col-md-4 col-sm-4 ps-complete-th">PLAYSTATION</th>
            </tr>
          </thead>
          <tbody className="ps-complete-body">
            {games.map(function(game) {
              if ((game.platform == 'PS4' || game.platform == 'PS Vita') && (game.progress == '100% Storyline' || game.progress == '100% Completion')) {
                return (
                    <Game game={game} key={game.id} />
                )
              }
            })}
          </tbody>
        </table>
      </div>
      <div className="col-md-3">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th className="col-md-4 col-sm-4 x-complete-th">XBOX</th>
            </tr>
          </thead>
          <tbody className="x-complete-body">
            {games.map(function(game) {
              if ((game.platform == 'XBOX One') && (game.progress == '100% Storyline' || game.progress == '100% Completion')) {
                return (
                    <Game game={game} key={game.id} />
                )
              }
            })}
          </tbody>
        </table>
      </div>
      <div className="col-md-3">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th className="col-md-4 col-sm-4 nin-complete-th">NINTENDO</th>
            </tr>
          </thead>
          <tbody className="nin-complete-body">
            {games.map(function(game) {
              if ((game.platform == "Nin 3DS" || game.platform == "Nin Switch" ) && (game.progress == '100% Storyline' || game.progress == '100% Completion')) {
                return (
                    <Game game={game} key={game.id} />
                )
              }
            })}
          </tbody>
        </table>
      </div>
      <div className="col-md-3">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th className="col-md-4 col-sm-4 pc-complete-th">PC</th>
            </tr>
          </thead>
          <tbody className="pc-complete-body">
            {games.map(function(game) {
              if ((game.platform == 'PC') && (game.progress == '100% Storyline' || game.progress == '100% Completion')) {
                return (
                    <Game game={game} key={game.id} />
                )
              }
            })}
          </tbody>
        </table>
      </div>
    </div>
  </div>

</div>

GamesList.defaultProps = {
  games: []
}
