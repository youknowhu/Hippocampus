require 'rails_helper'

RSpec.describe Api::UsersController, type: :controller do

  describe 'POST #create' do
    context 'with invalid params' do
      it 'validates the presence of the user\'s username and password' do
        post :create, params: { user: { username: 'youknowhu', password: '' } }
        expect(response).to be_bad_request

      end

      it 'validates that the password is at least 8 characters long' do
        post :create, params: { user: { username: 'youknowhu', password: 'short' } }
        expect(response).to be_bad_request
      end
    end

    context 'with valid params' do
      it 'renders user show json upon success' do
        post :create, params: {
          user: {
            username: 'youknowhu',
            password: 'password',
            zip: '12345',
            first_name: 'kimmy',
            last_name: 'hu',
            img_url: 'www.google.com'
          }
        }

        expect(response.status).to eq(200)
      end

      it 'logs in the user' do
        post :create, params: { user: {
          username: 'youknowhu',
          password: 'password',
          zip: '12345',
          first_name: 'kimmy',
          last_name: 'hu',
          img_url: 'www.google.com'
          }
        }
        user = User.find_by_username('youknowhu')

        expect(session[:session_token]).to eq(user.session_token)
      end
    end
  end
end
