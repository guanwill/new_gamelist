#MY GAMES LIST

##Website
Heroku: https://stark-retreat-73573.herokuapp.com/

##Purpose
* Tracks the status of all your video games
* Search for information on any game that you want

##Inspiration
There are indeed a lot of websites out there that provide similar features, however, I still end up using Ms Excel at the end of the day to track my games. Why? Because Excel is simple and very easy on the eyes. That was all I needed and thus this app was created to solve this (personal) problem. I hope those who share a similar opinion find this app useful.

##Features
* Users are required to create an account in order to view and create their own list
* Users are also able to edit and delete their individual game entries
* Users can specify a progress percentage for each game that they have on their list
* Users can also specify a game's release date and platform if they choose to
* Games are categorized into three categories: Planning to play, Currently playing, and finished playing
* Users can search for information on a particular game

##Technologies Used
* Ruby on Rails
* Postgresql
* HTML5/CSS3/Bootstrap
* Google Fonts
* HTTParty
* [RatyRate Gem](https://github.com/wazery/ratyrate)
* [Devise Gem](https://github.com/plataformatec/devise)
* [Rails4-autocomplete Gem](https://github.com/peterwillcn/rails4-autocomplete)
* [GiantBomb's API](http://www.giantbomb.com/api/)

##Future Considerations
* ~~Use an external API to store names of all existing games into the database~~
* ~~Integrate autofill feature so that users don't have to type the whole name of the game~~
* Integrate an info page for each game

##Update 1.2 29/7/2016
* Incorporated GiantBomb's API so users can search for information on any game
* Users can search for games by clicking on the search icon in the nav bar or joystick icon on the home page

##Update 1.1 27/7/2016
* Seeded a csv file with a massive list of games into postgreSQL
* Implemented an autofill feature when users try to add a game

##Update 1.1 23/12/2016 - 2/1/2016
* Re-designed website layout
* Added sortable columns
