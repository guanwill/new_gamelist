import React from 'react';
import FooterGame  from './FooterGame';

export const FooterGamesList = ({latestGames}) =>

    // This is the container for the slider
    // Loops through latestGames and for each game, we create a component FooterGame where we customize how each game section will look 
    <ul className="footer-row" id="lightSlider">
      {latestGames.map(function(gameresult) {
        return (
            <FooterGame footerGames={gameresult} key={gameresult.id} />
        )
      })}
    </ul>
