class Api::ReviewsController < ApplicationController
  def new

  end
  def show
    @review = Review.find(params[:id])
  end

  def create
    @review = Review.new(review_params)

    if @review.save
      render 'api/reviews/show.json.jbuilder'
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def update
    @review = Review.find(params[:id])

    if @review.update(review_params)
      render 'api/reviews/show.json.jbuilder'
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = Review.find(params[:id])

    if @review.destroy
      render 'api/reviews/show.json.jbuilder'
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  private
  def review_params
    params.require(:review).permit(:user_id, :listing_id, :body)
  end
end
