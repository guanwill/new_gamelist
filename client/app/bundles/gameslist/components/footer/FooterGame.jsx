import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

export default class FooterGame extends React.Component {
  render () {

    const footergame = this.props.footerGames;

    if (footergame.original_release_date != null){
      var release_date = moment(footergame.original_release_date).format('MMMM Do YYYY');
    }
    else {
      var release_date = "TBA"
    }

    if (footergame.image != null){
      var game_image_url = footergame.image.small_url
    }


    return (
      <li>
        <a target="_blank" href={footergame.site_detail_url}><img className="api-image=" src={game_image_url}/></a>
        <p><a target="_blank" href={footergame.site_detail_url}>{footergame.name}</a></p>
        <p> {release_date} </p>
      </li>
    )
  }
}
