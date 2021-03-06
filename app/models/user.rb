class User < ApplicationRecord
  validates :email, :session_token, :first_name, :last_name, presence: true, uniqueness: true 
	validates :password_digest, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  
  after_initialize :ensure_session_token
  attr_reader :password

  has_many :decks,
  dependent: :destroy,
  primary_key: :id,
  foreign_key: :creator_id,
  class_name: :Deck

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user && user.is_password?(password)
    user
  end

  def password=(password)
    @password = password 
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    bc_pass = BCrypt::Password.new(self.password_digest)
    bc_pass.is_password?(password)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end
end
