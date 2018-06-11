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
    context 'with invalid params' do
      before(:each) do
        post :create, params: { review: { body: nil, user_id: kimmy.id, listing_id: nil} }
      end

      it 'returns unprocessable entity status 422 and corresponding errors array' do
        expect(response.status).to be(422)
        expect(response.body).to include("Listing can't be blank")
      end
    end

    context 'with valid params' do
      before(:each) do
        post :create, params: { review: { body: 'such a beautiful national park', user_id: kimmy.id, listing_id: listing.id } }
      end

      it 'creates a new review' do
        expect(response.status).to be(200)
        expect(response).to render_template('api/reviews/show.json.jbuilder')
        expect(response.request.request_parameters).to eq({
          "review" => {"body" => "such a beautiful national park",
          "listing_id" => listing.id.to_s, "user_id" => kimmy.id.to_s }})
      end
    end
  end
end
