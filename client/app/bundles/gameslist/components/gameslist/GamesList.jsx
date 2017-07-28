import React from 'react';
import Game from './Game';

export const GamesList = ({games}) =>
<div className="tab-content">

  <div id="game_playing" className="tab-pane fade in active">
    <div className="row">
      <div className="col-md-3 col-sm-12">
        <table className="table table-borderedd">
          <thead>
            <tr>
              <th className="col-md-6 col-sm-6 ps-playing-th"><img className="console-icons" src="https://s12.postimg.org/fawhlmetp/ps3.png"/>PLAYSTATION</th>
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
          <table className="table table-borderedd">
            <thead>
              <tr>
                <th className="col-md-6 col-sm-6 x-playing-th"><img className="console-icons" src="https://s17.postimg.org/kaa37ogbj/image.png"/>XBOX</th>
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
          <table className="table table-borderedd">
            <thead>
              <tr>
                <th className="col-md-6 col-sm-6 nin-playing-th"><img className="console-icons" src="https://s4.postimg.org/plm3mbpf1/nin2.png"/>NINTENDO</th>
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
          <table className="table table-borderedd">
            <thead>
              <tr>
                <th className="col-md-6 col-sm-6 pc-playing-th"><img className="console-icons" src="https://s17.postimg.org/wqsfz0fsv/image.png"/>PC</th>
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
    <div className="row  ">
      <div className="col-md-3 col-sm-12">
        <table className="table table-borderedd">
          <thead>
            <tr>
              <th className="col-md-6 col-sm-6 ps-start-th"><img className="console-icons" src="https://s12.postimg.org/fawhlmetp/ps3.png"/>PLAYSTATION</th>
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
      <div className="col-md-3 col-sm-12">
        <table className="table table-borderedd">
          <thead>
            <tr>
              <th className="col-md-6 col-sm-6 x-start-th"><img className="console-icons" src="https://s17.postimg.org/kaa37ogbj/image.png"/>XBOX</th>
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
      <div className="col-md-3 col-sm-12">
        <table className="table table-borderedd">
          <thead>
            <tr>
              <th className="col-md-6 col-sm-6 nin-start-th"><img className="console-icons" src="https://s4.postimg.org/plm3mbpf1/nin2.png"/>NINTENDO</th>
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
      <div className="col-md-3 col-sm-12">
        <table className="table table-borderedd">
          <thead>
            <tr>
              <th className="col-md-6 col-sm-6 pc-start-th"><img className="console-icons" src="https://s17.postimg.org/wqsfz0fsv/image.png"/>PC</th>
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
    <div className="row  ">
      <div className="col-md-3 col-sm-12">
        <table className="table table-borderedd">
          <thead>
            <tr>
              <th className="col-md-6 col-sm-6 ps-complete-th"><img className="console-icons" src="https://s12.postimg.org/fawhlmetp/ps3.png"/>PLAYSTATION</th>
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
      <div className="col-md-3 col-sm-12">
        <table className="table table-borderedd">
          <thead>
            <tr>
              <th className="col-md-6 col-sm-6 x-complete-th"><img className="console-icons" src="https://s17.postimg.org/kaa37ogbj/image.png"/>XBOX</th>
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
      <div className="col-md-3 col-sm-12">
        <table className="table table-borderedd">
          <thead>
            <tr>
              <th className="col-md-6 col-sm-6 nin-complete-th"><img className="console-icons" src="https://s4.postimg.org/plm3mbpf1/nin2.png"/>NINTENDO</th>
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
      <div className="col-md-3 col-sm-12">
        <table className="table table-borderedd">
          <thead>
            <tr>
              <th className="col-md-6 col-sm-6 pc-complete-th"><img className="console-icons" src="https://s17.postimg.org/wqsfz0fsv/image.png"/>PC</th>
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



  <div id="game_wish" className="tab-pane fade in">
    <div className="row  ">
      <div className="col-md-3 col-sm-12">
        <table className="table table-borderedd">
          <thead>
            <tr>
              <th className="col-md-6 col-sm-6 ps-wish-th"><img className="console-icons" src="https://s12.postimg.org/fawhlmetp/ps3.png"/>PLAYSTATION</th>
            </tr>
          </thead>
          <tbody className="ps-wish-body">
            {games.map(function(game) {
              if ((game.platform == 'PS4' || game.platform == 'PS Vita') && (game.progress == 'Wish' || game.progress == 'Contemplating')) {
                return (
                    <Game game={game} key={game.id} />
                )
              }
            })}
          </tbody>
        </table>
      </div>
      <div className="col-md-3 col-sm-12">
        <table className="table table-borderedd">
          <thead>
            <tr>
              <th className="col-md-6 col-sm-6 x-wish-th"><img className="console-icons" src="https://s17.postimg.org/kaa37ogbj/image.png"/>XBOX</th>
            </tr>
          </thead>
          <tbody className="x-wish-body">
            {games.map(function(game) {
              if ((game.platform == 'XBOX One') && (game.progress == 'Wish' || game.progress == 'Contemplating')) {
                return (
                    <Game game={game} key={game.id} />
                )
              }
            })}
          </tbody>
        </table>
      </div>
      <div className="col-md-3 col-sm-12">
        <table className="table table-borderedd">
          <thead>
            <tr>
              <th className="col-md-6 col-sm-6 nin-wish-th"><img className="console-icons" src="https://s4.postimg.org/plm3mbpf1/nin2.png"/>NINTENDO</th>
            </tr>
          </thead>
          <tbody className="nin-wish-body">
            {games.map(function(game) {
              if ((game.platform == "Nin 3DS" || game.platform == "Nin Switch" ) && (game.progress == 'Wish' || game.progress == 'Contemplating')) {
                return (
                    <Game game={game} key={game.id} />
                )
              }
            })}
          </tbody>
        </table>
      </div>
      <div className="col-md-3 col-sm-12">
        <table className="table table-borderedd">
          <thead>
            <tr>
              <th className="col-md-6 col-sm-6 pc-wish-th"><img className="console-icons" src="https://s17.postimg.org/wqsfz0fsv/image.png"/>PC</th>
            </tr>
          </thead>
          <tbody className="pc-wish-body">
            {games.map(function(game) {
              if ((game.platform == 'PC') && (game.progress == 'Wish' || game.progress == 'Contemplating')) {
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
