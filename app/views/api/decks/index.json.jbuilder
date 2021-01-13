@decks.each do |deck| 
  json.set! deck.id do
    json.extract! deck, :id, :title, :objective, :creator_id, :mastery
  end
end
