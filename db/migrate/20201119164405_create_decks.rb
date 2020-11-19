class CreateDecks < ActiveRecord::Migration[5.2]
  def change
    create_table :decks do |t|
      t.string :title, null: false 
      t.string :objective

      t.timestamps
    end
  end
end
