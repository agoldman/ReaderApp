Newsreader::Application.routes.draw do
  resources :feeds do
    resources :entries, only: [:index]
  end
  root to: "feeds#index"
end
