Rails.application.routes.draw do

  namespace :api do
    get 'shelvings/create'
    get 'shelvings/destroy'
    get 'shelvings/edit'
  end
  namespace :api do
    get 'sessions/create'
    get 'sessions/destroy'
    get 'sessions/edit'
  end
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resources :books, only: [:create, :index, :show]
    resources :bookshelves, except: [:new, :edit]
    resources :shelvings, only: [:create, :destroy, :edit]

    resource :session, only: [:create, :destroy]
  end

  root "static_pages#root"
end
