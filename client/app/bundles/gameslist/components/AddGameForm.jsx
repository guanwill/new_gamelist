import React from 'react';
import Datetime from 'react-datetime';
import moment from 'moment';
import update from 'immutability-helper';
import { Link } from 'react-router-dom';


export default class AddGameForm extends React.Component{
  constructor(props, _railsContext){
      super(props)
      console.log('addgameform props')
      console.log(props)
      this.state = {
        title: '',
        genre: '',
        platform: '',
        progress: '',
        release_date: '',
        editing: false
      }
  }

  // Preload existing fields when editing a selected game
  componentDidMount () {
    if(this.props.match){
      $.ajax({
        type: "GET",
        url: `http://localhost:3000/api/gamesapi/${this.props.match.params.id}`,
        datatype: "JSON"
      }).done((data) => {
        console.log('Print data from add game form via componentDidMount')
        console.log(data)
        this.setState({
          title: data.title,
          genre: data.genre,
          platform: data.platform,
          progress: data.progress,
          release_date: data.release_date,
          editing: this.props.match.path === '/games/:id/edit'
        });
      })
    }
  }

  handleChange = (e) => {
    var name = e.target.name;
    var obj = {};
    obj[name] = e.target.value;
    this.setState(obj)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.state.editing ? this.updateGame() : this.addGame();
  }

  addGame = () => {
    // e.preventDefault();
    $.ajax({
      url: window.location.origin + '/api/gamesapi/',
      type: 'POST',
      dataType: 'JSON',
      data: {
        game: this.state
      },
      success: (data) => {
        this.props.handleNewGame(data);
        this.setState ({
          title: '',
          genre: '',
          platform: '',
          progress: '',
          release_date: '',
        })
        alert('Success')
        $('#add_game').removeClass('in')
      },
      error: () => {
        alert('This game already exists in your games list')
        $('#add_game').removeClass('in')
      }
    })
  }

  deleteGame = () => {
    if(confirm("Are you sure?")) {
      $.ajax({
          type: "DELETE",
          url: window.location.origin + `/api/gamesapi/${this.props.match.params.id}`,
          })
          .done( (data) => {
            alert('Game deleted')
            this.props.history.push('/games') //redirect link
          })
          .fail( (response) => {
            console.log('deleting failed')
          })
    }
  }

  updateGame = () => {
    const game = {
      title: this.state.title,
      genre: this.state.genre,
      platform: this.state.platform,
      progress: this.state.progress,
      release_date: this.state.release_date,
    };
    $.ajax({
          type: "PUT",
          url: `http://localhost:3000/api/gamesapi/${this.props.match.params.id}`,
          data: {game: game}
          })
          .done( (data) => {
            alert('Game updated')
            this.props.history.push('/games')
          })
          .fail( (response) => {
            console.log(response)
          })
  }

  render () {
    if (this.state.title != "" && this.state.progress != "") {
      var disabled = false
    }
    else {
      var disabled = true
    }

    return (
      <div>
        <h2>{this.state.editing ? 'Update Game' : 'Add Game'}</h2>

        <form onSubmit={this.handleSubmit}>
          <input name="title" placeholder="Title" value={this.state.title} onChange={this.handleChange}/>
          <input name="genre" placeholder="genre" value={this.state.genre} onChange={this.handleChange}/>
          <input name="platform" placeholder="platform" value={this.state.platform} onChange={this.handleChange}/>
          <input name="progress" placeholder="progress" value={this.state.progress} onChange={this.handleChange}/>
          <input name="release_date" placeholder="release_date" value={this.state.release_date} onChange={this.handleChange}/>

          <input type="submit" value={this.state.editing ? 'Update game' : 'Add game'} className="btn btn-primary add-game-button" />
        </form>
        {this.state.editing && (<button onClick={this.deleteGame}>Delete</button>)}
      </div>
    )
  }
};
