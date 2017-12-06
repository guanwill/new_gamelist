import React from 'react';
import { Link } from 'react-router-dom';
import { FooterGamesList } from './FooterGamesList'

export default class Footer extends React.Component{
  constructor(props, _railsContext){
      super(props)
      this.state = {
        latestGames: []
      }
  }

  // Always make API call to grab latest game when rendering home page and then display it in slider
  componentDidMount() {
    $.ajax({
      method: 'get',
      crossDomain: true,
      url: '/getnewgames',
      success: function(response){

        // Update latestGames state with the results
        this.setState({latestGames: response.results})

        $("#lightSlider").lightSlider({
          item: 5,
          autoWidth: false,
          enableDrag:true,
          loop: true,
          mode: "slide",
          useCSS: true,
          cssEasing: 'ease',
          easing: 'linear',
          auto: true,
          speed: 1000,
        });
      }.bind(this)
    });
  }

  // Render footer slider. Footer bottom nav is a separate component. not lumped together as some components only want the Footer bottom nav and not the Footer slider
  // We pass the results in latestGames to the FooterGamesList component
  render() {
    return (
      <div className="footer-container">
        <div className="home-divider">
          <p className="latest-games-heading">Latest Games</p>
          <FooterGamesList latestGames={this.state.latestGames}/>
        </div>
      </div>
    )
  }
}
