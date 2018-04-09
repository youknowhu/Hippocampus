class Api::ListingsController < ApplicationController
  def show
    @listing = Listing.find(params[:id])
    @reviews = @listing.reviews.order(created_at: :desc).pluck(:id)
    @guests = @listing.bookings.where('start_date > ?', Date.today).pluck(:guest_id)

    if logged_in?
      @current_user_bookings = current_user.bookings
        .where('listing_id = ?', @listing.id)
        .where('start_date > ?', Date.today)
    else
      @current_user_bookings = {}
    end
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
