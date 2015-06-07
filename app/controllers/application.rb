set :session_secret, 'oh you are so secretive'

get '/' do
  erb :index2
end

get '/sanj' do
  erb :sanj
end