import React from 'react';
import {GamesList} from './GamesList';
import update from 'immutability-helper';
import AddGameForm from './AddGameForm';
import { Header } from '../Header'
import { Link } from 'react-router-dom';
import { toggleTableHeadimg } from '../util/custom';
import { changeGametabColor } from '../util/custom';

// import  FooterBottom  from '../footer/FooterBottom'

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
        url: window.location.origin + "/api/games",
        datatype: "JSON"
      }).done((data) => {
        console.log("Updated data")
        this.setState({game_data: data});
      })
    }

    // allow user to show and hide game list per platform panel
    toggleTableHeadimg()
    changeGametabColor()
  }

  // Add game via manual user input
  addGame = (game) => {
    const game_data = update(this.state.game_data, { $push: [game] });
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

    // RENDERS GAMES LIST AND ADD GAME FORM
    return (
      <div className="gameslist_body">

        <div className="home_header_bar">
          <Link className='gameslist_link' to={ `/` }>My Games List</Link>
        </div>

        <div className="game_status_title_container">
            <a className="playing_tab game_status_title" data-toggle="tab" href="#game_playing">Playing</a>
            <a className="planning_tab game_status_title" data-toggle="tab" href="#game_start">Planning</a>
            <a className="completed_tab game_status_title" data-toggle="tab" href="#game_completed">Completed</a>
            <a className="wishlist_tab game_status_title" data-toggle="tab" href="#game_wish">Wishlist</a>
            <a className="game_status_title_last" data-toggle="collapse" data-target="#add_game">Add</a>
        </div>

        <AddGameForm handleNewGame={this.addGame}/>
        <GamesList games={this.state.game_data} />

        <p><br/></p>
      </div>
    )
  }
}

// <FooterBottom currentUser={this.state.currentUser} />
