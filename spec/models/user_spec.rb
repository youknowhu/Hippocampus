require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'password encryption' do
    it 'does not save passwords to the database' do
      User.create!(username: 'youknowhu123', password: 'abcdefgh', zip: '12345', first_name: 'kimmy', last_name: 'hu', img_url: 'www.google.com')
      user = User.find_by_username('youknowhu123')
      expect(user.password).not_to be('abcdef')
    end

    it 'encrypts the password using BCrypt' do
      expect(BCrypt::Password).to receive(:create)
      User.new(username: 'youknowhu123', password: 'abcdefgh', zip: '12345', first_name: 'kimmy', last_name: 'hu', img_url: 'www.google.com')
    end
  end

  describe 'session token' do
    it 'assigns a session_token if one is not given' do
      kimmy = User.create(username: 'youknowhu123', password: 'abcdefgh', zip: '12345', first_name: 'kimmy', last_name: 'hu', img_url: 'www.google.com')
      expect(kimmy.session_token).not_to be_nil
    end
  end

  it { should validate_length_of(:password).is_at_least(8) }
  it { should validate_presence_of(:username) }
  it { should validate_presence_of(:password_digest) }
  it { should validate_presence_of(:first_name) }
  it { should validate_presence_of(:last_name) }
  it { should validate_presence_of(:session_token) }
  it { should validate_presence_of(:zip) }
  it { should validate_presence_of(:img_url) }
  it { should have_many(:reviews) }
  it { should have_many(:listings) }
  it { should have_many(:bookings) }
  it { should have_many(:saves) }
end
