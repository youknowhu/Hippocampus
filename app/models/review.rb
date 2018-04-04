class Review < ApplicationRecord
  validates :user_id, :listing_id, :body, presence: true

  belongs_to :listing
  belongs_to :user
end
