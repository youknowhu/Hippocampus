class ListingPhoto < ApplicationRecord
  validates :listing_id, :img_url, :order, presence: true

  belongs_to :listing
end
