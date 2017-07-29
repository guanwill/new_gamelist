class Api::GamesapiController < ApplicationController
  before_action :authenticate_user!
  skip_before_action :verify_authenticity_token

  def index
    @games = Game.where(:user_id => current_user.id).order("title ASC, release_date ASC NULLS LAST")

    render json: @games, status: 200
  end

  def show
    @games = Game.find(params[:id])
    render json: @games, status: 200
  end

  def create
    game = Game.new(game_params)
    game.user_id = current_user.id
    game.save
      if game.save
        render json: game, status: 200
      else
        render json: game.errors, status: :unprocessable_entity
      end
  end

  def new
    @games = Game.new
    render json: @games, status: 200
  end

  def edit
    @game = Game.find(params[:id])
    render json: @game, status: 200
  end

  def update
    @game = Game.find(params[:id])
    @game.update(game_params)
    if @game.valid?
      render json: @game, status: 200
    else
      render json: @game.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @game = Game.find(params[:id])
    @game.destroy
    if @game.destroy
      respond_to do |format|
        # format.html { redirect_to items_url, notice: 'Item was successfully destroyed.' }
        format.json { head :no_content }
      end
    end
  end

  private

  def game_params
    params.required(:game).permit(:title, :genre, :platform, :release_date, :progress, :rating, :review, :comments)
  end


end
