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
end
