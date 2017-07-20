class HomeController < ApplicationController
skip_before_filter :verify_authenticity_token

  def index
    @games = Game.all
    @currentUser = current_user
    @GB_GAMES_API_URL = ENV['GB_GAMES_API_URL']
    @GB_SEARCH_API_URL = ENV['GB_SEARCH_API_URL']
  end

  def getsearchresults
    searchresults = {}
    search_query = params[:query]
    gb_search_api_url = ENV['GB_SEARCH_API_URL']
    url = "#{gb_search_api_url}&format=json&query=#{params[:query]}&resources=game&limit=10"
    begin
      searchresults = RestClient.get(url)
    rescue RestClient::Exception => e
      puts e.http_body
    end
    render :json => searchresults
  end

  def getnewgames
    gameresults = {}
    gb_games_api_url = ENV['GB_GAMES_API_URL']
    url = "#{gb_games_api_url}&&sort=original_release_date:desc&format=json&filter=original_release_date:2016-03-14|#{Time.now}&limit=10"
    begin
      gameresults = RestClient.get(url)
    rescue RestClient::Exception => e
      puts e.http_body
    end
    render :json => gameresults
  end

end
