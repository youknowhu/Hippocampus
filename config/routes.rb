Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index]
    resources :listings, only: [:index, :show] do
      resources :listing_photos, only: [:index]
    end
    resource :session, only: [:create, :destroy, :show]
  end

  root "static_pages#root"
end
