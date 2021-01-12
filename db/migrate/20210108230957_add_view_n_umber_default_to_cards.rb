class AddViewNUmberDefaultToCards < ActiveRecord::Migration[5.2]
  def change
    change_column_default(:cards, :number_views, 0)
  end
end
