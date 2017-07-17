import React from 'react';
import {GamesList} from './GamesList'; //braces because its a name import. an es6 thing
import update from 'immutability-helper';

export default class Games extends React.Component{
  static defaultProps = {
    game_data: []
  }

  // Grab initial state of data and past them to GamesList component
  constructor(props, _railsContext){
      super(props)
      console.log('props')
      console.log(props)
      console.log(props.games)
      this.state = {
        game_data: this.props.games,
      }
  }

  // To keep data fresh on page load
  componentDidMount () {
    if(this.props.match){
      $.ajax({
        type: "GET",
        url: "http://localhost:3000/api/gamesapi",
        datatype: "JSON"
      }).done((data) => {
        console.log("Updated data " + data)
        this.setState({game_data: data});
      })
    }
  }

  addGame= (game) => {
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
        <GamesList games={this.state.game_data} />
      </div>
    )
  }
}

// addGame: function(game) {
//   var game_data = React.addons.update(this.state.game_data, {$push: [game]});
//   this.setState({
//     game_data: game_data
//   })
// },
//
// updateGame: function(game,data) {
//   var index = this.state.game_data.indexOf(game)
//   var game_data = React.addons.update(this.state.game_data, { $splice: [[index, 1, data]] })
//   this.replaceState({
//     game_data: game_data
//   })
// },
//
// deleteGame: function(game) {
//   var index = this.state.game_data.indexOf(game)
//   var game_data = React.addons.update(this.state.game_data, { $splice: [[index, 1]] })
//   this.replaceState({
//     game_data: game_data
//   })
// },
