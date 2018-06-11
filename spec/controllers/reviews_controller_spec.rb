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

  describe 'GET #show' do
    context 'renders review json object' do
      before(:each) do
        review1 = Review.create!(body: 'I love camping!', user_id: kimmy.id, listing_id: listing.id)
        get :show, params: { id: review1.id }
      end

      it 'by using review id and returns 200 status OK' do
        expect(response.status).to be(200)
      end
    end
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

      it 'creates a new review and returns 200 status OK' do
        expect(response.status).to be(200)
        expect(response).to render_template('api/reviews/show.json.jbuilder')
        expect(response.request.request_parameters).to eq({
          "review" => {"body" => "such a beautiful national park",
          "listing_id" => listing.id.to_s, "user_id" => kimmy.id.to_s }})
      end
    end
  end

  describe 'PATCH #update' do
    context 'with invalid params' do
      before(:each) do
        review1 = Review.create!(body: 'I love camping!', user_id: kimmy.id, listing_id: listing.id)
        patch :update, params: { id: review1.id, review: { body: 'I hate camping!', user_id: kimmy.id, listing_id: nil } }
      end

      it 'returns unprocessable entity status 422 and corresponding errors array' do
        expect(response.status).to be(422)
        expect(response.body).to include("Listing can't be blank")
      end
    end

    context 'with valid params' do
      before(:each) do
        review1 = Review.create!(body: 'I love camping!', user_id: kimmy.id, listing_id: listing.id)
        patch :update, params: { id: review1.id, review: { body: 'I hate camping!', user_id: kimmy.id, listing_id: listing.id } }
      end

      it 'updates review and returns 200 status OK' do
        expect(response.status).to be(200)
        expect(response).to render_template('api/reviews/show.json.jbuilder')
        expect(response.request.request_parameters).to eq({
          "review" => {"body" => "I hate camping!",
          "listing_id" => listing.id.to_s, "user_id" => kimmy.id.to_s }})
      end
    end
  end

  describe 'DELETE #destroy' do
    context 'with valid params' do
      before(:each) do
        review1 = Review.create!(body: 'I love camping!', user_id: kimmy.id, listing_id: listing.id)
        delete :destroy, params: { id: review1.id }
      end

      it 'deletes review and returns 200 status OK' do
        expect(response.status).to be(200)
        expect(response).to render_template('api/reviews/show.json.jbuilder')
      end
    end
  end
end
