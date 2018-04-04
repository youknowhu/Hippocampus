@listings.each do |listing|
  json.partial! "api/listings/listing", listing: listing
end
