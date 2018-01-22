import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

export default class Game extends React.Component {
  render () {
    if (this.props.game.release_date == null) {
      var game_release_date = ""
    }
    else {
      // Display the release date of a game in my list if it is going to be released within 7 days from today
      var time_now = moment()
      var game_release_date = moment(this.props.game.release_date)
      var answer = (game_release_date - time_now) / (1000*60*60*24)
      var comparison = (answer < 90 && answer > 0)

      if ( answer < 90 && answer > 0 )  {
        var final_game_release_date = moment(this.props.game.release_date).format('Do MMMM YYYY')
      }
      else if  ( answer <= 0 ) {
        var final_game_release_date = ""
      }
    }

    // Display Game Name as a link to the AddGameForm. The component has a Editing State. When it is true, the form will display differently with different buttons
    return (
      <tr>
        <td><Link to={ `/games/${this.props.game.id}/edit` }>{this.props.game.title} </Link> <span className="close_release_date"> {final_game_release_date} </span></td>
      </tr>
    )
  }
}
