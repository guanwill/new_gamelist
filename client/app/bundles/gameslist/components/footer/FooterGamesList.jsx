import React from 'react';
import FooterGame  from './FooterGame';

export const FooterGamesList = ({latestGames}) =>

    <ul className="footer-row" id="lightSlider">
      {latestGames.map(function(gameresult) {
        return (
            <FooterGame footerGames={gameresult} key={gameresult.id} />
        )
      })}
    </ul>
