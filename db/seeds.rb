# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
#
#   @rune_index["data"].each do |id, rune|
#     @rune = Rune.create({
#       :rune_id => id,
#       :rune_name => rune["name"],
#       :rune_description => rune["description"],
#       :rune_image => rune["image"]["full"]
#     })
#   end

# require('httparty')

# --------GET GAME LIST API---------
# @game_array = []
#
# i = 1
# while i <= 20 do
#   @game_array.push((HTTParty.get "http://www.giantbomb.com/api/game/3030-#{i}/?api_key=cf71909f53e1497132eb781d7aab4d0936bfb352&format=json")["results"]["name"])
#   i+=1
# end
#
# for i in 0..@game_array.length
#   game = Gamesapi.create(name: @game_array[i])
# end
#
# @gamelist = HTTParty.get "http://www.giantbomb.com/api/games/?api_key=cf71909f53e1497132eb781d7aab4d0936bfb352&format=json&field_list=name&offset=100"
