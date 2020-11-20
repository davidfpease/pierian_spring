class Deck < ApplicationRecord
  validates :title, presence: true

  has_many :cards,
  dependent: :destroy,
  primary_key: :id,
  foreign_key: :deck_id,
  class_name: :Card

  belongs_to :creator,
  foreign_key: :creator_id,
  class_name: :User





end
