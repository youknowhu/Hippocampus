class Api::SessionsController < ApplicationController

  def new
  end

  def create
    user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password])

    if user
      log_in(user)
      redirect_to api_user_url(user)
    else
      render json: ['No current user'], status: 422
    end
  end

  def destroy
    log_out
    render json: {}
  end
end
