class Api::ExternalController < ApplicationController
  def elevation
    latlng = params(:latlng)
    debugger
    render json: "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/elevation/json?locations=#{latlng}&key=#{ENV['GOOGLE_API']}"

  end

  def weather
  end
end
