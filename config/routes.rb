Rails.application.routes.draw do

  namespace :api do
    get 'bookshelves/create'
    get 'bookshelves/index'
    get 'bookshelves/update'
    get 'bookshelves/show'
    get 'bookshelves/destroy'
  end
  get 'bookshelves/create'
  get 'bookshelves/index'
  get 'bookshelves/show'
  get 'bookshelves/update'
  get 'bookshelves/destroy'
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resources :books, only: [:create, :index, :show]
    resources :bookshelves, except: [:new, :edit]

    resource :session, only: [:create, :destroy]
  end

  root "static_pages#root"
end
