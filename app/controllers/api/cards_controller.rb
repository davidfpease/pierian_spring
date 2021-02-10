class Api::CardsController < ApplicationController

  def index
    #retrieve all cards associated with the current deck
    deck_id = params[:deck_id]
    # 
    if deck_id
      @cards = Card.where("deck_id = ?", deck_id)
    else
      @cards = Card.all
    end
    render :index
  end

  def create
    #
    deck_id = params[:deck_id]
    @card = Card.new(card_params)
    @card.deck_id = deck_id

    if @card.save!
      render :show
    else 
      render json: @card.errors.full_messages, status: 422
    end
  end

  def copy
    @cards = []
    cards_params = params[:cards]
    cards_params.permit!
    # cards_hash = cards_params.to_hash()

    cards_params.each do |key, val|
      card = Card.new(val)
      card.save!
      @cards << card 
    end 

    render :index


    # if Card.create!(@cards)
    #   
    #   render :index
    # else
    #   render json: @cards.errors.full_messages
    # end   
  end

  def update
    @card = Card.find_by(id: params[:id])
    # 
    if @card.update(card_params)
      render :show
    else
      render json: @card.errors.full_messages, status: :unprocessable_entity
    end
  end

  def bulk
    params[:cards].each do |val|
      @card = Card.find_by(id: val[1][:id])
      @card.update!(val[1].permit(:score, :number_views, :last_view))
    end
    
    @cards = Card.where("deck_id = ?", params[:cards]["0"]["deck_id"])
    render :index



  end

  def destroy
    @card = Card.find(params[:id])
    @card.destroy
    render :show
  end

  private

  def card_params
    params.require(:card).permit(:question, :answer, :score, :last_view, :number_views)
  end
end
