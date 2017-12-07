import React from 'react';
import moment from 'moment';
import AddSearchedGameForm from './AddSearchedGameForm'

export default class ResultItems extends React.Component{
  render() {

    // Individual games passed down from Results component
    var game = this.props.gameResult;

    // Format game release date if release date exists
    if (this.props.gameResult.original_release_date != ""){
      var gameDate = moment(this.props.gameResult.original_release_date).local().format('DD/MM/YYYY')
    }

    // Return an array of consoles
    var platform_array = []
    var platforms = this.props.gameResult.platforms
    if (platforms != null) {
      platforms.forEach(function(plat){
        var platform = plat.name
        platform_array.push(platform)
      })
    }

    // If API returns no image for a game
    if (game.image != null) {
        var game_image_url = game.image.icon_url
    }
    else {
      var game_image_url = ""
    }

    // For displaying a unique AddGameForm for each game.
    var data_target_name = "#gameid" + game.id

    // We display game image and info here. We also pass some game data, formatted release date and current user as props to AddSearchedGameForm component
    return(
      <div className="game_record_container">
        <div className="row-eq-height">

          <div className='col-md-2 col-sm-2 image-col'>
            <img className="api-image=" src={game_image_url}/>
          </div>

          <div className='col-md-10 col-sm-10 para-col'>
            <h4><a target="_blank" href={game.site_detail_url}>{game.name}</a></h4>
            <p className="game_platform_results">{platform_array.join(', ')}</p>
            {game.deck}
            {this.props.currentUser && (<a className="game_results_add game_status_title_last" data-toggle="collapse" data-target={data_target_name}>Add</a>)}
          </div>
        </div>

        <div className="row">
          <div className='col-md-12 col-sm-12'>
            <AddSearchedGameForm gameResult={game} gameDate={gameDate} currentUser={this.props.currentUser} />
          </div>
        </div>
      </div>
    )
  }
}
