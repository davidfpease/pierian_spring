class AddCreatorIdToDecks < ActiveRecord::Migration[5.2]
  def change
    add_column :decks, :creator_id, :integer, null: false
    add_index :decks, :creator_id
  end

end
