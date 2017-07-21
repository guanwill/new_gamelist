import React from 'react';
import FooterGame  from './FooterGame';

export const FooterGamesList = ({latestGames}) =>
    //Footer Game Component as a variable
    // const footergames = this.props.latestGames.map(function(result){
    //   return (
    //     <FooterGames key={result.id} footerGames={result}/>
    //   );
    // });

    <ul className="footer-row" id="lightSlider">

      {latestGames.map(function(gameresult) {
        return (
            <FooterGame footerGames={gameresult} key={gameresult.id} />
        )
      })}
    </ul>
