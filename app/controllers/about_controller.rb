class AboutController < ApplicationController
skip_before_filter :verify_authenticity_token
autocomplete :gamesapi, :name, :full => true

def about
end

def search
  # @summoner = HTTParty.get "https://oce.api.pvp.net/api/lol/oce/v1.4/summoner/by-name/#{params[:summonerName]}?api_key=f94d23f9-73a9-43e6-bf03-62156d895c2a"
  @gameName = HTTParty.get "http://www.giantbomb.com/api/search/?api_key=cf71909f53e1497132eb781d7aab4d0936bfb352&format=json&query=#{params[:gameName]}&resources=game&limit=10"
end

end
