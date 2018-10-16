Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resources :books, only: [:create, :index, :show]
    resources :bookshelves, except: [:new, :edit]

    resource :session, only: [:create, :destroy]
  end

  root "static_pages#root"
end
