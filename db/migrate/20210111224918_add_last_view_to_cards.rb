class AddLastViewToCards < ActiveRecord::Migration[5.2]
  def change
    add_column :cards, :last_view, :integer, default: 0
  end
end
