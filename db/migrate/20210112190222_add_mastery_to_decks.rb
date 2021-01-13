class AddMasteryToDecks < ActiveRecord::Migration[5.2]
  def change
    add_column :decks, :mastery, :float, default: 0
  end
end
