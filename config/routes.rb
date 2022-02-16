# frozen_string_literal: true

Rails.application.routes.draw do
  resources :medications
  resources :patients
  devise_for :users
  get '*path', to: 'home#index', constraints: ->(request) { request.format.html? }
  root 'home#index'
end
