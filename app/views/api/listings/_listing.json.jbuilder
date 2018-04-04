json.set! listing.id do
  json.extract! listing, :id, :host_id, :title, :body, :daily_cost,
    :is_private, :is_camping, :allows_pets, :max_capacity, :check_in_after,
    :check_out_before, :lat, :lng, :icon_url

  json.listing_photo_ids listing.listing_photos.pluck(:id)
  json.listing_review_ids listing.reviews.pluck(:id)
  json.listing_booking_ids listing.bookings.pluck(:id)

end
