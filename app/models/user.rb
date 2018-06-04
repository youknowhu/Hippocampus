class User < ApplicationRecord
  attr_reader :password

  validates :username, :password_digest, :first_name, :last_name,
    :session_token, :zip, presence: true
  validates :username, :session_token, uniqueness: true
  validates :password, length: { minimum: 8, allow_nil: true }
  validates_format_of :zip, with: /^\d{5}(-\d{4})?$/, multiline: true,  message: "format should be '12345' or '12345-6789'"


  after_initialize :ensure_session_token

  has_many :listings,
  foreign_key: :host_id,
  class_name: :Listing

  has_many :bookings,
  foreign_key: :guest_id,
  class_name: :Booking

  has_many :saves,
  foreign_key: :user_id,
  class_name: :Save


  has_many :reviews

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.valid_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end
end
