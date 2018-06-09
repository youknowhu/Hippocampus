class Booking < ApplicationRecord
  validates :guest_id, :listing_id, :check_in, :check_out, :num_guests,
    presence: true

  belongs_to :listing
  
  belongs_to :guest,
    foreign_key: :guest_id,
    class_name: :User

end
