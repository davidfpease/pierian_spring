Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy, :show]
    resources :users, only: [:index, :update, :create, :destroy]
    resources :decks, only: [:destroy, :update, :create, :show, :index] do 
      resources :cards, only: [:index, :create]
    end
    resources :cards, only: [:destroy, :update, :index]
  end


  root "static_pages#root"
end
