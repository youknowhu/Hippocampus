class Listing < ApplicationRecord
  validates :host_id, :title, :body, :daily_cost, :max_capacity,
    :check_in_after, :check_out_before, :lat, :lng, presence: true

  validates :is_private, :is_camping, :allows_pets,
    inclusion: { in: [true, false] }

  has_many :listing_photos
  has_many :reviews
  has_many :bookings

  belongs_to :host,
  foreign_key: :host_id,
  class_name: :User

  def elevation
    latlng = self.lat.to_s + "," + self.lng.to_s
    res = HTTParty.get "https://maps.googleapis.com/maps/api/elevation/json?locations=#{latlng}&key=#{ENV['GOOGLE_API']}", {accept: :json}
    res['results'][0]['elevation']
  end

  def weather
    res = HTTParty.get "http://api.openweathermap.org/data/2.5/weather?lat=#{self.lat}&lon=#{self.lng}&APPID=#{ENV['OPEN_WEATHER_API']}&units=imperial", {accept: :json}
    res['weather'][0]['description']
  end

  def temp
    res = HTTParty.get "http://api.openweathermap.org/data/2.5/weather?lat=#{self.lat}&lon=#{self.lng}&APPID=#{ENV['OPEN_WEATHER_API']}&units=imperial", {accept: :json}
    res['main']['temp']
  end
end
