json.partial! "api/listings/listing", listing: @listing


json.listing_photos do
  @listing.listing_photos.each do |photo|
    json.set! photo.id do
      json.extract! photo, :id, :listing_id, :img_url, :order
    end
  end
end

json.bookings do
  @listing.bookings.each do |booking|
    json.set! booking.id do
      json.extract! booking, :id, :guest_id, :listing_id, :start_date,
        :end_date, :num_guests, :total_cost, :created_at
    end
  end
end

json.reviews do
  @listing.reviews.each do |review|
    json.set! review.id do
      json.extract! review, :id, :user_id, :listing_id, :body,
        :created_at
    end
  end
end
