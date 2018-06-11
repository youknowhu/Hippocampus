require 'rails_helper'

RSpec.describe Listing,  type: :model do
  describe 'fetches external API using listing latitude and longitude' do
    User.destroy_all
    Listing.destroy_all
    user1 = User.create!(username: 'youknowhu123', password: 'abcdefgh', zip: '12345', first_name: 'kimmy', last_name: 'hu', img_url: 'www.google.com')
    listing1 = Listing.create!(host_id: user1.id, title: 'Glacier National Park',
      body: "Glacier National Park has magnificient glacier-carved peaks and valleys.
      Keep an eye out for mountain goats to grizzly bears.",
      daily_cost: 25, is_private: false, is_camping: true, allows_pets: false,
      max_capacity: 10, check_in_after: '2 PM', check_out_before: '12 PM',
      lat: 48.6587896, lng: -113.7870225,
      icon_url:'https://res.cloudinary.com/deor0br3s/image/upload/q_auto/v1522783893/glacier_national_park.jpg' )

    it 'fetches elevation from Google Maps Elevation API' do
      result = listing1.elevation.to_i
      expect(result).to be(1205)
    end

    it 'fetches current weather conditions from Open Weather API' do
      result = listing1.weather
      expect(result).to_not be_nil
    end

    it 'fetches current temperature from Open Weather API' do
      result = listing1.temp
      expect(result).to_not be_nil
    end
  end

  it { should validate_presence_of(:host_id) }
  it { should validate_presence_of(:title) }
  it { should validate_presence_of(:body) }
  it { should validate_presence_of(:daily_cost) }
  it { should validate_presence_of(:max_capacity) }
  it { should validate_presence_of(:check_in_after) }
  it { should validate_presence_of(:check_out_before) }
  it { should validate_presence_of(:lat) }
  it { should validate_presence_of(:lng) }
  it { is_expected.to validate_inclusion_of(:is_private).in_array [true, false] }
  it { is_expected.to validate_inclusion_of(:is_camping).in_array [true, false] }
  it { is_expected.to validate_inclusion_of(:allows_pets).in_array [true, false] }
  it { should have_many(:listing_photos) }
  it { should have_many(:reviews) }
  it { should have_many(:bookings) }
  it { should have_many(:saves) }
  it { should belong_to(:host) }
end
