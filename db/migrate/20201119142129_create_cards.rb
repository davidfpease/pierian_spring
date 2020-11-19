class CreateCards < ActiveRecord::Migration[5.2]
  def change
    create_table :cards do |t|
      t.integer :deck_id, null: false
      t.text :question, null: false
      t.text :answer, null: false

      t.timestamps
    end
    add_index :cards, :deck_id
  end
end
