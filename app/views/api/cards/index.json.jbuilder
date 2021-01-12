@cards.each do |card|
  json.set! card.id do
    json.extract! card, :id, :question, :answer, :deck_id, :score, :number_views, :last_view
  end
end