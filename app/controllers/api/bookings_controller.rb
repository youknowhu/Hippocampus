class Api::BookingsController < ApplicationController
  def show
    @booking = Booking.find(params[:id])
  end

  def create
    @booking = Booking.new(booking_params)

    if @booking.save
      render :show
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  def destroy
    @booking = Booking.find(params[:id])

    if @booking.destroy
      render :show
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  private
  def booking_params
    params.require(:booking).permit(:guest_id, :listing_id, :check_in, :check_out, :num_guests)
  end
end
