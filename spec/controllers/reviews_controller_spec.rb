require 'rails_helper'

RSpec.describe Api::ReviewsController, type: :controller do
  let(:kimmy) { User.create!(username: 'youknowhu', password: 'abcdefgh', zip: '12345', first_name: 'kimmy', last_name: 'hu', img_url: 'www.google.com') }

  let(:listing) do
    Listing.create!(host_id: kimmy.id, title: 'Glacier National Park',
      body: "Glacier National Park has magnificient glacier-carved peaks and valleys.
      Keep an eye out for mountain goats to grizzly bears.",
      daily_cost: 25, is_private: false, is_camping: true, allows_pets: false,
      max_capacity: 10, check_in_after: '2 PM', check_out_before: '12 PM',
      lat: 48.6587896, lng: -113.7870225,
      icon_url:'https://res.cloudinary.com/deor0br3s/image/upload/q_auto/v1522783893/glacier_national_park.jpg' )
  end

  before(:each) do
    allow_message_expectations_on_nil
  end

  describe 'POST #create' do
    # it { should route(:post, '/api/reviews').to(action: :create) }

    context 'when logged in' do
      before do
        allow(controller).to receive(:current_user) { kimmy }
      end

      # context 'with invalid params' do
      #   it 'flashes errors' do
      #     post :create, params: { review: review }
      #     expect(flash[:errors]).to be_present
      #   end
      # end

      context 'with valid params' do
        it 'creates and adds review' do
          params = { review: { body: 'such a beautiful national park', user_id: kimmy.id, listing_id: listing.id } }
          post :create, params
          expect(response).to include_json(
              user_id: kimmy.id,
              listing_id: listing.id,
              id: review.id,
              body: 'such a beautiful national park'
          )
        end
      end
    end
  end
end
