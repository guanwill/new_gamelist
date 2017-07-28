import React from 'react';
import Datetime from 'react-datetime';
import moment from 'moment';
import update from 'immutability-helper';
import { Link } from 'react-router-dom';


export default class AddGameForm extends React.Component{
  constructor(props, _railsContext){
      super(props)
      console.log('addgameform')
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
        url: window.location.origin + `/api/gamesapi/${this.props.match.params.id}`,
        datatype: "JSON"
      }).done((data) => {
        this.setState({
          title: data.title || "",
          genre: data.genre || "",
          platform: data.platform || "",
          progress: data.progress || "",
          release_date: data.release_date || "",
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
          url: window.location.origin + `/api/gamesapi/${this.props.match.params.id}`,
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
    const disabledSubmitStatus = (this.state.title != "" && this.state.progress != "" && this.state.platform != "") ? false : true
    const disabledInputStatus = this.state.editing ? true : false

    // {this.state.editing && (<h2>Update Game</h2>)} //put title out of the form
    return (
      <div className={this.state.editing ? 'edit-game-form' : 'add-game-form'}>

        <form id="add_game" className={this.state.editing ? 'form-group' : 'form-group collapse'} onSubmit={this.handleSubmit}>
          <input className="form-control add-game-field" name="title" placeholder="Title" value={this.state.title} onChange={this.handleChange}/><br/>

          <select className="form-control add-game-field" placeholder="Genre" name="genre" value={this.state.genre} onChange={this.handleChange}>
            <option value="Select"> Select Genre </option>
            <option value="Action"> Action </option>
            <option value="Adventure"> Adventure </option>
            <option value="Fighting"> Fighting </option>
            <option value="Fps"> FPS </option>
            <option value="Sports"> Sports </option>
            <option value="Strategy"> Strategy </option>
            <option value="Simulation"> Simulation </option>
            <option value="Novel"> Novel </option>
            <option value="Other"> Other </option>
          </select><br/>

          <select className="form-control add-game-field" placeholder="Platform" name="platform" value={this.state.platform} onChange={this.handleChange}>
            <option value="Select"> Select Platform </option>
            <option value="PS4"> PS4 </option>
            <option value="PS Vita"> PS Vita </option>
            <option value="Nin 3DS"> Nin 3DS </option>
            <option value="Nin Switch"> Nin Switch </option>
            <option value="XBOX One"> XBOX One </option>
            <option value="PC"> PC </option>
            <option value="Mobile"> Mobile </option>
            <option value="Other"> Other </option>
          </select><br/>

          <select className="form-control add-game-field" placeholder="progress" name="progress" value={this.state.progress} onChange={this.handleChange}>
            <option value="Select"> Select Progress </option>
            <option value="0%"> 0% </option>
            <option value="25% "> 25% </option>
            <option value="50% "> 50% </option>
            <option value="75%"> 75% </option>
            <option value="100% Storyline"> 100% Storyline </option>
            <option value="100% Completion"> 100% Completion </option>
            <option value="Wish"> Wish </option>
            <option value="Contemplating"> Contemplating </option>
            <option value="On hold"> On Hold </option>
          </select><br/>

          <input type="date" className="form-control add-game-field" name="release_date" placeholder="release_date" value={this.state.release_date} onChange={this.handleChange}/><br/>

          <input disabled={disabledSubmitStatus} type="submit" value={this.state.editing ? 'Update Game' : 'Add Game'} className="btn btn-primary add-game-button" />

          {!this.state.editing && <a className="btn btn-danger close-after-add-button"  data-toggle="collapse" data-target="#add_game">Close </a>}
        </form>


        {this.state.editing && (<button className="btn btn-danger delete-game-button" onClick={this.deleteGame}>Delete</button>)}
        {this.state.editing && (<p className="back-from-update-button"><Link to={ `/games` }>Back</Link></p>)}
      </div>
    )
  }
};

// {!this.state.editing && (<a className="game_status_title_last" data-toggle="collapse" data-target="#add_game">Add Game</a>)}
