json.listings do
  json.set! listing.id do
    json.extract! listing, :id, :host_id, :title, :body, :daily_cost,
      :is_private, :is_camping, :allows_pets, :max_capacity, :check_in_after,
      :check_out_before, :lat, :lng, :icon_url
  end
end
