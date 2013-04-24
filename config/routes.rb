Newsreader::Application.routes.draw do
  resources :feeds do
    resources :entries
  end
  root to: "feeds#index"
end
