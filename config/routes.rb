Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index]
    resources :listings, only: [:index, :show]
    resources :reviews, only: [:new, :create, :show, :edit, :update, :destroy]
    resources :bookings, only: [:new, :create, :destroy]
    resource :session, only: [:create, :destroy, :show]
  end

  get '/api/home_index', to: 'api/listings#home_index'
  root "static_pages#root"
end
