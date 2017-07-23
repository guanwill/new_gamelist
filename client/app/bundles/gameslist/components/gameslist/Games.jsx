import React from 'react';
import {GamesList} from './GamesList'; //braces because its a name import. an es6 thing
import update from 'immutability-helper';
import AddGameForm from './AddGameForm';
import { Header } from '../Header'
import { Link } from 'react-router-dom';
import  FooterBottom  from '../footer/FooterBottom'

export default class Games extends React.Component{
  static defaultProps = {
    game_data: [],
  }

  // Grab initial state of data and past them to GamesList component
  constructor(props, _railsContext){
      super(props)
      this.state = {
        game_data: this.props.games,
        currentUser: this.props.currentUser
      }
  }

  // To keep data fresh on page load
  componentDidMount () {
    if(this.props.match){
      $.ajax({
        type: "GET",
        url: window.location.origin + "/api/gamesapi",
        datatype: "JSON"
      }).done((data) => {
        console.log("Updated data")
        this.setState({game_data: data});
      })
    }
  }

  addGame = (game) => {
    const game_data = update(this.state.game_data, { $push: [game]});
    this.setState({
      game_data: game_data
    });
  }

  render() {
    // Sort by alphbet
    const game_data = this.state.game_data
    game_data.sort(compare)
    function compare(a,b) {
      if (a.title < b.title)
        return -1;
      if (a.title > b.title)
        return 1;
      return 0;
    }

    return (
      <div>
        <div className="home_header_bar">
          <Link className='gameslist_link' to={ `/` }>My Games List</Link>
        </div>

        <div className="game_status_title_container">
            <a className="game_status_title" data-toggle="tab" href="#game_playing">Playing</a>
            <a className="game_status_title" data-toggle="tab" href="#game_start">Planning</a>
            <a className="game_status_title" data-toggle="tab" href="#game_completed">Completed</a>
            <a className="game_status_title" data-toggle="tab" href="#game_wish">Wishlist</a>
            <a className="game_status_title_last" data-toggle="collapse" data-target="#add_game">Add</a>
        </div>

        <AddGameForm handleNewGame={this.addGame}/>
        <GamesList games={this.state.game_data} />
        <FooterBottom currentUser={this.state.currentUser} />
      </div>
    )
  }
}
