class Save < ApplicationRecord
  validates :user_id, :listing_id, presence: true

  belongs_to :user
  belongs_to :listing
end
