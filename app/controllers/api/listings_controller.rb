class Api::ListingsController < ApplicationController
  def show
    @listing = Listing.find(params[:id])
    @reviews = @listing.reviews.order(created_at: :desc).pluck(:id)
  end

  def index
    @listings = Listing.all
      .includes(:reviews)
      .includes(:bookings)
      .includes(:listing_photos)

  end

  private
  def listing_params
    params.require(:listing).permit(:host_id, :title, :body,
    :daily_cost, :is_private, :is_camping, :allows_pets, :max_capacity,
    :check_in_after, :check_out_before, :lat, :lng, :icon_url)
  end

end
