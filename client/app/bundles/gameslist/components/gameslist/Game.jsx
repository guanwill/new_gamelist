import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

export default class Game extends React.Component {

  // componentDidMount() {
  //   if (this.props.game.release_date == null) {
  //     var game_release_date = ""
  //   }
  //   else {
  //     var time_now = moment()
  //     // console.log('time now' + moment().format('MMMM Do YYYY'))
  //     var game_release_date = moment(this.props.game.release_date)
  //     // console.log('release date' + moment(this.props.game.release_date).format('MMMM Do YYYY'))
  //     var answer = (time_now - game_release_date) / (1000*60*60*24)
  //     // console.log(answer)
  //     var comparison = (answer < 7 && answer > 0)
  //     // console.log(comparison)
  //
  //     if ( answer < 7 && answer > 0 )  {
  //       var final_game_release_date = moment(this.props.game.release_date).format('Do MMMM YYYY')
  //     }
  //     else if  ( answer >= 0 ) {
  //       var final_game_release_date = ""
  //     }
  //   }
  // }

  deleteGame = () => {
    if(confirm("Are you sure?")) {
      $.ajax({
          type: "DELETE",
          url: window.location.origin + `/api/games/${this.props.game.id}`,
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
    if (this.props.game.release_date == null) {
      var game_release_date = ""
    }
    else {
      var time_now = moment()
      // console.log('time now' + moment().format('MMMM Do YYYY'))
      var game_release_date = moment(this.props.game.release_date)
      // console.log('release date' + moment(this.props.game.release_date).format('MMMM Do YYYY'))
      var answer = (game_release_date - time_now) / (1000*60*60*24)
      // console.log(answer)
      var comparison = (answer < 7 && answer > 0)
      // console.log(this.props.game.title)
      // console.log(comparison)

      if ( answer < 7 && answer > 0 )  {
        var final_game_release_date = moment(this.props.game.release_date).format('Do MMMM YYYY')
      }
      else if  ( answer <= 0 ) {
        var final_game_release_date = ""
      }
    }

    return (
      <tr>
        <td><Link to={ `/games/${this.props.game.id}/edit` }>{this.props.game.title} </Link> <span className="close_release_date"> {final_game_release_date} </span></td>
      </tr>
    )
  }
}

// return (
//   <tr>
//     <td><Link to={ `/games/${this.props.game.id}/edit` }>{this.props.game.title}</Link></td>
//     <td>{this.props.game.genre}</td>
//     <td>{this.props.game.platform}</td>
//     <td>{this.props.game.progress}</td>
//     <td>{game_release_date}</td>
//   </tr>
// )
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
