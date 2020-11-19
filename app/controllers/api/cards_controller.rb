class Api::CardsController < ApplicationController

  def index
    #retrieve all cards associated with the current deck
    @cards = Card.all
    render :index

  end

  def create
    #debugger
    deck_id = params[:deck_id]
    @card = Card.new(card_params)
    @card.deck_id = deck_id
    @card.save!
    render :show

  end

  def update

  end

  def destroy
    @card = Card.find(params[:id])
    @card.destroy
    render :show

  end

  private

  def card_params
    params.require(:card).permit(:question, :answer)
  end



end
