import React from 'react';
import moment from 'moment';
import NewAddGameForm from './NewAddGameForm'

export default class ResultItems extends React.Component{
  render() {
    var game = this.props.gameResult;
    if (this.props.gameResult.original_release_date != ""){
      var gameDate = moment(this.props.gameResult.original_release_date).local().format('DD/MM/YYYY')
      console.log('date ' + gameDate)
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

    // For displaying an AddGameForm for each game
    var data_target_name = "#gameid" + game.id
    var data_target_classname = ".gameid" + game.id //for if you want to trigger addGame form in a modal

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
            <NewAddGameForm gameResult={game} gameDate={gameDate} currentUser={this.props.currentUser} />
          </div>
        </div>
      </div>
    )
  }
}
