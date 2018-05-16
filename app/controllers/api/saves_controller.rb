class Api::SavesController < ApplicationController

  def create
    @save = Save.new(save_params)

    if @save.save
      render :show
    else
      render json: @save.errors.full_messages, status: 422
    end
  end

  def destroy
    @save = Save.find(params[:id])

    if @save.destroy
      render :show
    else
      render json: @save.errors.full_messages, status: 422
    end
  end

  private
  def save_params
    params.require(:save).permit(:user_id, :listing_id)
  end
end
