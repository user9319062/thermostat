set :session_secret, 'oh you are so secretive'

get '/' do
  erb :index
end

get '/sanj' do
  erb :sanj
end