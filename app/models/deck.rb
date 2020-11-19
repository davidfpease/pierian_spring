class Deck < ApplicationRecord
  validates :title, presence: true

  has_many :cards,
  primary_key: :id,
  foreign_key: :deck_id,
  class_name: :Card




end
