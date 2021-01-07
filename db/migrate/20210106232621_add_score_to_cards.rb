class AddScoreToCards < ActiveRecord::Migration[5.2]
  def change
    add_column :cards, :score, :float, default: 0
  end
end
