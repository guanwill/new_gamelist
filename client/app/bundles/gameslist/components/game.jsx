import React, { PropTypes } from 'react';
// import { Link } from 'react-router-dom'; //this is a react link library to create links. similar to a tag
// import { formatDate } from '../utils/format';


export default class Game extends React.Component {
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
  //       this.setState({appointment: data});
  //     })
  //   }
  // }

  render () {
    return (
      <div className='game'>
        <p>{this.props.game.title}</p>
      </div>
    )
  }
}

// export const Appointment = ({appointment}) =>
//   <div className='appointment'>
//
//     <Link to={ `/appointments/${appointment.id}` }>
//       <h3>{appointment.title}</h3>
//     </Link>
//
//     <p>{formatDate(appointment.appt_time)}</p>
//   </div>
