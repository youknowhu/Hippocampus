class Api::SessionsController < ApplicationController

  def new
  end

  def create
    user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password])

    if user
      log_in(user)
    else
      render json: ['Invalid username/password'], status: 401
    end
  end

  def destroy
    log_out
    render json: {}
  end
end
