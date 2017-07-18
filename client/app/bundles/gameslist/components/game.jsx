import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
// import { formatDate } from '../utils/format';

export default class Game extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      game: props.game
    }
  }

  // setting default prop
  static defaultProps = {
    game: {}
  }

  componentDidMount () {
    if(this.props.match){
      $.ajax({
        type: "GET",
        url: `/games/${this.props.match.params.id}`,
        datatype: "JSON"
      }).done((data) => {
        console.log('show data of this game')
        console.log(data)
        this.setState({game: data});
      })
    }
  }

  render () {
    return (
      <tr>
        <td>{this.state.game.title}</td>
        <td>{this.state.game.genre}</td>
        <td>{this.state.game.platform}</td>
        <td>{this.state.game.progress}</td>
        <td>{this.state.game.release_date}</td>

        <td><Link to={ `/games/${this.state.game.id}/edit` }>Edit<i className="fa fa-pencil-square-o" aria-hidden="true"></i></Link> </td>

        <td><a onClick={this.handleDelete}> <i className="fa fa-trash-o" aria-hidden="true"></i></a></td>
      </tr>
    )
  }
}
