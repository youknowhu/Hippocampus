json.partial! "api/listings/listing", listing: @listing

json.host do
  json.set! @listing.host.id do
    json.extract! @listing.host, :id, :username, :first_name,
      :last_name, :img_url
  end
end


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
      json.extract! booking, :id, :guest_id, :listing_id, :check_in,
        :check_out, :num_guests, :created_at
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

json.external do
  json.elevation @listing.elevation
  json.weather @listing.weather
  json.temp @listing.temp
end

json.sorted_reviews @reviews
json.current_user_bookings @current_user_bookings[0]
