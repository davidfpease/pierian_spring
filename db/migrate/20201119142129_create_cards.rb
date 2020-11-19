class CreateCards < ActiveRecord::Migration[5.2]
  def change
    create_table :cards do |t|
      t.integer :deck_id
      t.text :quetion
      t.text :answer

      t.timestamps
    end
  end
end
