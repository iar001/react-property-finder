Rails.application.routes.draw do
  resources :properties
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'

  resources :users
  resources :properties

  get '/users/:user_id/properties', to: 'users#index_by_properties'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
