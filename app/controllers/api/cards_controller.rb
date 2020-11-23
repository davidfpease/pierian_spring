class Api::CardsController < ApplicationController

  def index
    #retrieve all cards associated with the current deck
    deck_id = params[:deck_id]
    # debugger
    if deck_id
      @cards = Card.where("deck_id = ?", deck_id)
    else
      @cards = Card.all
    end
    render :index
  end

  def create
    #debugger
    deck_id = params[:deck_id]
    @card = Card.new(card_params)
    @card.deck_id = deck_id

    if @card.save!
      render :show
    else 
      render json: @card.errors.full_messages, status: 422
    end
  end

  def update
    @card = Card.find_by(id: params[:id])
    # debugger
    if @card.update(card_params)
      render :show
    else
      render json: @card.errors.full_messages, status: :unprocessable_entity
    end
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
