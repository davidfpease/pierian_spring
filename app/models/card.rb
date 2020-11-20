class Card < ApplicationRecord
  validates :deck_id, :question, :answer, presence: true
  validates :question, length: { minimum: 1 }
  #before_action :require_logged_in

  belongs_to :deck,
  primary_key: :id,
  foreign_key: :deck_id,
  class_name: :Deck

 

end
