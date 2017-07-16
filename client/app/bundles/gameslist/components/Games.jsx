import React from 'react';
import {GamesList} from './GamesList'; //braces because its a name import. an es6 thing
import update from 'immutability-helper';

export default class Games extends React.Component{
  static defaultProps = {
    game_data: []
  }

  constructor(props, _railsContext){
      super(props)
      console.log('props')
      console.log(props)
      console.log(props.games)
      this.state = {
        game_data: this.props.games,
      }
  }

  // componentDidMount () {
  //   if(this.props.match){
  //     $.ajax({
  //       type: "GET",
  //       url: "http://localhost:3000/api/gamesapi",
  //       datatype: "JSON"
  //     }).done((data) => {
  //       console.log("data" + data)
  //       this.setState({game_data: data});
  //     })
  //   }
  // }

  // <GamesList games={this.state.games} />


  render() {
    return (
      <div>
        <GamesList games={this.state.game_data} />
      </div>
    )
  }
}
