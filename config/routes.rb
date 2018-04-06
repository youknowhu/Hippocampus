Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index]
    resources :listings, only: [:index, :show]
    resources :reviews, only: [:new, :create, :show, :edit, :update, :destroy]
    resource :session, only: [:create, :destroy, :show]
  end

  root "static_pages#root"
end
