import React from 'react';
import Datetime from 'react-datetime';
import moment from 'moment';
import update from 'immutability-helper';


export default class AddGameForm extends React.Component{
  constructor(props, _railsContext){
      super(props)
      this.state = {
        title: '',
        genre: '',
        platform: '',
        progress: '',
        release_date: '',
        editing: false
      }
  }

  handleChange = (e) => {
    var name = e.target.name;
    var obj = {};
    obj[name] = e.target.value;
    this.setState(obj)
  }

  addGame = (e) => {
    e.preventDefault();
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
        });
      })
    }
  }

  // handleUserInput = (fieldName, fieldValue) => {
  //   const newFieldState = update(this.state[fieldName], {value: {$set: fieldValue}})
  //   this.setState({[fieldName]: newFieldState}, () => {this.validateField(fieldName, fieldValue, validations)} );
  // }

  handleSubmit = (e) => {
    e.preventDefault();
    this.state.editing ? this.updateGame() : this.addGame();
  }

  // ///////// WIP///////
  updateGame () {
    const game = {
      title: this.state.title,
      // appt_time: this.state.appt_time.value
    };
    $.ajax({
          type: "PATCH",
          url: window.location.origin + `/api/gamesapi/${this.props.match.params.id}/edit`,
          data: {game: game}
          })
          .done( (data) => {
            alert('Game updated')
          })
          .fail( (response) => {
            console.log(response)
          })
  }

  // handleChange = (e) => {
  //   const fieldName = this.titleInput.name;
  //   const fieldValue = this.titleInput.value;
  //   this.handleUserInput(fieldName, fieldValue);
  // }

  render () {
    if (this.state.title != "" && this.state.progress != "") {
      var disabled = false
    }
    else {
      var disabled = true
    }

    return (
      <div>
        <h2>Add Game</h2>

        <form onSubmit={this.handleSubmit}>
          <input name="title" placeholder="Title"
            value={this.state.title}
            onChange={this.handleChange}/>
          <input type="submit" value="add game" className="btn btn-primary add-game-button" />
        </form>

        <button onClick={this.deleteGame}>Delete</button>


      </div>
    )
  }
};
