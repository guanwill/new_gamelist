import React, { PropTypes } from 'react';
// import { Link } from 'react-router-dom'; //this is a react link library to create links. similar to a tag
// import { formatDate } from '../utils/format';

export default class Game extends React.Component {
  render () {
    return (
      <tr>
        <td>{this.props.game.title}</td>
        <td>{this.props.game.genre}</td>
        <td>{this.props.game.platform}</td>
        <td>{this.props.game.progress}</td>
        <td>{this.props.game.release_date}</td>
        <td><a onClick={this.handleToggle}> <i className="fa fa-pencil-square-o" aria-hidden="true"></i></a></td>
        <td><a onClick={this.handleDelete}> <i className="fa fa-trash-o" aria-hidden="true"></i></a></td>
      </tr>
    )
  }
}


// constructor (props) {
//   super(props)
//   this.state = {
//     game: props.game
//   }
// }
//
// // setting default prop
// static defaultProps = {
//   game: {}
// }

// componentDidMount () {
//   if(this.props.match){
//     $.ajax({
//       type: "GET",
//       url: `/games/${this.props.match.params.id}`,
//       datatype: "JSON"
//     }).done((data) => {
//       console.log('show page data in json')
//       console.log(data)
//       this.setState({game: data});
//     })
//   }
// }
