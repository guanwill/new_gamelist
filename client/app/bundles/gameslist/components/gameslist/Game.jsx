import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

export default class Game extends React.Component {

  deleteGame = () => {
    if(confirm("Are you sure?")) {
      $.ajax({
          type: "DELETE",
          url: window.location.origin + `/api/gamesapi/${this.props.game.id}`,
          })
          .done( (data) => {
            alert('Game deleted')
            environment.defaultEnvironment.navigate("/games");
          })
          .fail( (response) => {
            console.log('deleting failed')
          })
    }
  }

  render () {
    return (
      <tr>
        <td><Link to={ `/games/${this.props.game.id}/edit` }>{this.props.game.title}</Link></td>
        <td>{this.props.game.genre}</td>
        <td>{this.props.game.platform}</td>
        <td>{this.props.game.progress}</td>
        <td>{moment(this.props.game.release_date).format('MMMM Do YYYY')}</td>
      </tr>
    )
  }
}

// constructor (props) {
//   super(props)
//   this.props = {
//     game: props.game
//   }
// }
//
// // setting default prop
// static defaultProps = {
//   game: {}
// }
//
// componentDidMount () {
//   if(this.props.match){
//     $.ajax({
//       type: "GET",
//       url: `/games/${this.props.match.params.id}`,
//       datatype: "JSON"
//     }).done((data) => {
//       console.log('show data of this game')
//       console.log(data)
//       this.setprops({game: data});
//     })
//   }
// }
