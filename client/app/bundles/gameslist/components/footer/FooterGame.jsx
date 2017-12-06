import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

export default class FooterGame extends React.Component {
  render () {

    // We grab all the game data
    const footergame = this.props.footerGames;

    // If release date is not nil, we format the date, else just display TBA
    if (footergame.original_release_date != null){
      var release_date = moment(footergame.original_release_date).format('MMMM Do YYYY');
    }
    else {
      var release_date = "TBA"
    }

    // If game image is not null, display the small version of the image
    if (footergame.image != null){
      var game_image_url = footergame.image.small_url
    }

    // Lets create the structure below
    return (
      <li>
        <a target="_blank" href={footergame.site_detail_url}><img className="api-image=" src={game_image_url}/></a>
        <p><a target="_blank" href={footergame.site_detail_url}>{footergame.name}</a></p>
        <p> {release_date} </p>
      </li>
    )
  }
}
