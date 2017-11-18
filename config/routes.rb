Rails.application.routes.draw do

  namespace :api do
    resources :gamesapi, defaults: {format: :json} do
    end
  end

  devise_for :users

  get '/home' => 'home#index'
  get '/getsearchresults/:query' => 'home#getsearchresults'
  get '/getnewgames' => 'home#getnewgames'

  root to: "home#index"

end
