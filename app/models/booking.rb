class Booking < ApplicationRecord
  validates :guest_id, :listing_id, :start_date, :end_date, :num_guests,
    presence: true

  belongs_to :listing
  belongs_to :guest,
  foreign_key: :guest_id,
  class_name: :User

end
