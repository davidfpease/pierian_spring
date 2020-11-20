class Api::DecksController < ApplicationController

  def index
    @decks = Deck.all
    render :index
  end

  def show
    #should I include all of the cards associated with this deck here?
    @deck = Deck.find(params[:id])
    render :show
  end

  def create
    @deck = Deck.new(deck_params)
    #add the creator id to the deck before saving (but not the demo user)
    @deck.creator_id = current_user.id
    if @deck.save!
      render :show
    else
      render json: @deck.errors.full_messages, status: 422
    end
  end

  def update
    @deck = Deck.find_by(id: params[:id])
    if @deck.update(deck_params)
      render :show
    else
      render json: @deck.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @deck = Deck.find(params[:id])
    @deck.destroy
    render :show
  end

  private

  def deck_params
    params.require(:deck).permit(:title, :objective)
  end






end
