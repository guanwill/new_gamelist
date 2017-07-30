Rails.application.routes.draw do

  namespace :api do
    resources :gamesapi, defaults: {format: :json} do
    end
  end

  devise_for :users

  get '/home' => 'home#index'
  root to: "home#index"
  get '/getsearchresults/:query' => 'home#getsearchresults'
  get '/getnewgames' => 'home#getnewgames'

end



# get '/games' => 'games#index'
# resources :games do
#   get :autocomplete_gamesapi_name, :on => :collection
# end

# post '/rate' => 'rater#create', :as => 'rate'
# devise_for :users, :controllers => {:registrations => "my_devise/registrations"}
# root to: "about#about"
# root to: "games#index"


# resources :games
# get '/plan' => 'games#plan'
# get '/completed' => 'games#completed'
# get '/about' => 'about#about'
# post '/search' => 'about#search'
