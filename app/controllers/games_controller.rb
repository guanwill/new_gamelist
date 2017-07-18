class GamesController < ApplicationController
# make sure user is logged in order to view their games list
# before_action :authenticate_user!

def index
  @games = Game.all
  # @gamelist = HTTParty.get "http://www.giantbomb.com/api/games/?api_key=cf71909f53e1497132eb781d7aab4d0936bfb352&format=json&field_list=name&offset=100"
  if user_signed_in?
    render 'index'
  else
    redirect_to new_user_session_path
  end
end

def plan
  @games = Game.average(:rating)
  if user_signed_in?
    render 'plan'
  else
    redirect_to new_user_session_path
  end
end

def completed
  @games = Game.average(:rating)
  if user_signed_in?
    render 'completed'
  else
    redirect_to new_user_session_path
  end
end

def create
  game = Game.new(game_params)
  game.user_id = current_user.id
  game.save
    if game.save
    # if game.progress != 100 && game.progress != 200 && game.progress != 0
    #   render 'index'
    # elsif game.progress == 100 || game.progress == 200
    #   render 'completed'
    # elsif game.progress == 0
    #   render 'plan'
      redirect_to :back, notice: '*Game sucessfully added'
    # render Rails.application.routes.recognize_path(request.referer)[:action]
    else
      # render edit_game_path
      redirect_to :back, notice: '*Game was not added successfully. Check required fields or enter a unique game title.'
    end
end

def new
  @games = Game.new
end

def edit
  @game = Game.find(params[:id])
end

def update
  @game = Game.find(params[:id])
  @game.update(game_params)
  if @game.valid?
    redirect_to games_path, notice: '*Game sucessfully updated'
  # if game progress is above 0% and below 100%, direct to current playing. If it is 100, direct to complete. if its 0, direct to planning to play
  # if @game.valid? && @game.progress != 100 && @game.progress != 200 && @game.progress != 0
  #   redirect_to games_path
  # elsif @game.valid? && @game.progress == 100 || @game.progress == 200
  #   redirect_to completed_path
  # elsif @game.valid? && @game.progress == 0
  #   redirect_to plan_path
  else
    redirect_to :back, notice: '*Game was not updated successfully'
  end
end

def destroy
  @game = Game.find(params[:id])
  @game.destroy

  if @game.destroy
    head :no_content, status: :ok
  else
    render json: @game.errors, status: :unprocessable_entity
  end

  # if @game.destroy
  #   redirect_to games_path, notice: '*Game sucessfully deleted'
  # else
  #   redirect_to :back, notice: '*Game could not be deleted successfully'
  # end
  # render 'back'
end

def show
end

private

def game_params
  params.required(:game).permit(:title, :genre, :platform, :release_date, :progress, :rating)
end



end
