class AddViewTimeStampToCards < ActiveRecord::Migration[5.2]
  def change
    add_column :cards, :number_views, :integer
  end
end
