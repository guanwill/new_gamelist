import React from 'react';
import { Link } from 'react-router-dom';
import { FooterGamesList } from './FooterGamesList'

export default class Footer extends React.Component{
  static defaultProps = {
    latestGames: []
  }

  constructor(props, _railsContext){
      super(props)
      console.log('footer props')
      console.log(props)
      this.state = {
        latestGames: []
      }
  }

  showLatestGames = (response) => {
    this.setState({latestGames: response.results})
  }

  componentDidMount() {
    $.ajax({
      method: 'get',
      crossDomain: true,
      url: '/getnewgames',
      success: function(response){
        this.showLatestGames(response);

        // this.setState({latestGames: response.results})

        console.log(response)

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
