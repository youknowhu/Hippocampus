require 'date'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Booking.delete_all
Listing.delete_all
ListingPhoto.delete_all
Review.delete_all

user1 = User.create!(username: 'guest', password: 'password',
  first_name: 'Guest', last_name: 'Login', zip: '94104',
  img_url: 'http://res.cloudinary.com/deor0br3s/image/upload/v1522982253/blue_hippo_logo_-_gray_bg_2.svg')

user2 = User.create!(username: 'youknowhu', password: 'password',
  first_name: 'Kimmy', last_name: 'Allgeier', zip: '94612',
  img_url: 'http://res.cloudinary.com/deor0br3s/image/upload/v1522982253/blue_hippo_logo_-_gray_bg_2.svg')

user3 = User.create!(username: 'sillysally', password: 'password',
  first_name: 'Sally', last_name: 'Smith', zip: '94110',
  img_url: 'http://res.cloudinary.com/deor0br3s/image/upload/v1522982253/blue_hippo_logo_-_gray_bg_2.svg')

user4 = User.create!(username: 'jollyjimmy', password: 'password',
  first_name: 'Jimmy', last_name: 'Johnson', zip: '94901',
  img_url: 'http://res.cloudinary.com/deor0br3s/image/upload/v1522982253/blue_hippo_logo_-_gray_bg_2.svg')

user5 = User.create!(username: 'bubblybetty', password: 'password',
    first_name: 'Betty', last_name: 'Boop', zip: '95120',
    img_url: 'http://res.cloudinary.com/deor0br3s/image/upload/v1522982253/blue_hippo_logo_-_gray_bg_2.svg')

user6 = User.create!(username: 'nps', password: 'password',
    first_name: 'National Park Services', last_name: '_', zip: '20001',
    img_url: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/US-NationalParkService-Logo.svg')

listing1 = Listing.create!(host_id: user6.id, title: 'Glacier National Park',
  body: "Glacier National Park is a 1,583-sq.-mi. wilderness area in
  Montana's Rocky Mountains, with glacier-carved peaks and valleys
  running to the Canadian border. It's crossed by the mountainous
  Going-to-the-Sun Road. Among more than 700 miles of hiking trails,
  it has a route to photogenic Hidden Lake. Other activities include
  backpacking, cycling and camping. Diverse wildlife ranges from
  mountain goats to grizzly bears.",
  daily_cost: 25, is_private: false, is_camping: true, allows_pets: false,
  max_capacity: 10, check_in_after: '2 PM', check_out_before: '12 PM',
  lat: 48.6587896, lng: -118.3283786,
  icon_url:'http://res.cloudinary.com/deor0br3s/image/upload/v1522783893/glacier_national_park.jpg' )

listing2 = Listing.create!(host_id: user2.id, title: 'Strawberry Fields',
  body: 'Come pick fresh wild strawberries in our fields and camp out
  under the stars. Get Back to the outdoors, Ob-La-Di, Ob-La-Da.',
  daily_cost: 25, is_private: true, is_camping: true, allows_pets: true,
  max_capacity: 15, check_in_after: '2 PM', check_out_before: '11 AM',
  lat: 37.6387602, lng: -122.2063796,
  icon_url: 'http://res.cloudinary.com/deor0br3s/image/upload/v1522867205/iceland_lake_myvatn_camping-1090749.jpg')

listing3 = Listing.create!(host_id: user2.id, title: 'Treehouse Getaway',
  body: 'Relive your childhood and spend a few days in a remote treehouse.
  Your mind, body, and soul will thank you.',
  daily_cost: 40, is_private: true, is_camping: false, allows_pets: false,
  max_capacity: 5, check_in_after: '3 PM', check_out_before: '12 PM',
  lat: 37.7610734, lng: -122.4320376,
  icon_url:'http://res.cloudinary.com/deor0br3s/image/upload/v1522866762/oval2.jpg' )


review1 = Review.create!(user_id: user5.id, listing_id: listing3.id,
  body: 'I took my husband and children to this treehouse last weekend
  and it was absolutely wonderful. Kimmy was a wonderful host, and
  the treehouse was surprisingly spacious.')

review2 = Review.create!(user_id: user3.id, listing_id: listing3.id,
  body: 'I would highly recommend staying in a treehouse. It really did
  bring me back to my childhood. We played many games on the cute wooden
  table in the center.')

review3 = Review.create!(user_id: user4.id, listing_id: listing3.id,
  body: 'We had a nice stay at the treehouse, although it was pretty
  tricky to find at first and we did not have good internet connection
  there')

review4 = Review.create!(user_id: user3.id, listing_id: listing2.id,
  body: 'Access to fresh wild strawberries in the California sun?
  Sold.' )

review5 = Review.create!(user_id: user2.id, listing_id: listing1.id,
  body: 'I highly recommend the Grinnell Glacier hike.
  We saw many wildlife along the way, including big horn sheep!')

review6 = Review.create!(user_id: user3.id, listing_id: listing1.id,
  body: 'Wow, Going-to-the-Sun road was absolutely breathtaking' )

review7 = Review.create!(user_id: user5.id, listing_id: listing2.id,
  body: 'I ate so many strawberries while camping here.
  They were so fresh! I brought some home to make strawberry earl
  grey donuts.' )

booking1 = Booking.create!(guest_id: user3.id, listing_id: listing2.id,
  start_date: Date.new(2018, 2, 3), end_date: Date.new(2018, 2, 5),
  num_guests: 4)

booking2 = Booking.create!(guest_id: user4.id, listing_id: listing2.id,
  start_date: Date.new(2018, 2, 10), end_date: Date.new(2018, 2, 15),
  num_guests: 5)

booking3 = Booking.create!(guest_id: user5.id, listing_id: listing2.id,
  start_date: Date.new(2018, 2, 20), end_date: Date.new(2018, 2, 22),
  num_guests: 3)

booking4 = Booking.create!(guest_id: user3.id, listing_id: listing3.id,
  start_date: Date.new(2018, 3, 1), end_date: Date.new(2018, 3, 4),
  num_guests: 11)

booking5 = Booking.create!(guest_id: user4.id, listing_id: listing3.id,
  start_date: Date.new(2018, 3, 13), end_date: Date.new(2018, 3, 15),
  num_guests: 12)

booking6 = Booking.create!(guest_id: user2.id, listing_id: listing1.id,
  start_date: Date.new(2018, 4, 1), end_date: Date.new(2018, 4, 4),
  num_guests: 5)

listing_photos1 = ListingPhoto.create!(listing_id: listing3.id,
  img_url: 'http://res.cloudinary.com/deor0br3s/image/upload/v1522866762/oval2.jpg',
  order: 1)

listing_photos2 = ListingPhoto.create!(listing_id: listing3.id,
  img_url: 'http://res.cloudinary.com/deor0br3s/image/upload/v1522866832/glamping-1695468_1920.jpg',
  order: 2)

listing_photos4 = ListingPhoto.create!(listing_id: listing2.id,
  img_url: 'http://res.cloudinary.com/deor0br3s/image/upload/v1522867205/iceland_lake_myvatn_camping-1090749.jpg',
  order: 1)

listing_photos5 = ListingPhoto.create!(listing_id: listing2.id,
  img_url: 'http://res.cloudinary.com/deor0br3s/image/upload/v1522867211/fields_camping.jpg',
  order: 2)

listing_photos6 = ListingPhoto.create!(listing_id: listing1.id,
  img_url: 'http://res.cloudinary.com/deor0br3s/image/upload/v1522783893/glacier_national_park.jpg',
  order: 1)

listing_photos7 = ListingPhoto.create!(listing_id: listing1.id,
  img_url: 'http://res.cloudinary.com/deor0br3s/image/upload/v1522904739/glacier1.jpg',
  order: 2)

listing_photos8 = ListingPhoto.create!(listing_id: listing1.id,
  img_url: 'http://res.cloudinary.com/deor0br3s/image/upload/v1522904773/glacier2.jpg',
  order: 3)

listing_photos9 = ListingPhoto.create!(listing_id: listing1.id,
  img_url: 'http://res.cloudinary.com/deor0br3s/image/upload/v1522904783/glacier3jpg.jpg',
  order: 4)

listing_photos10 = ListingPhoto.create!(listing_id: listing1.id,
  img_url: 'http://res.cloudinary.com/deor0br3s/image/upload/v1522904739/glacier4.jpg',
  order: 5)

listing_photos11 = ListingPhoto.create!(listing_id: listing1.id,
  img_url: 'http://res.cloudinary.com/deor0br3s/image/upload/v1522904739/glacier7.jpg',
  order: 6)

listing_photos12 = ListingPhoto.create!(listing_id: listing1.id,
  img_url: 'http://res.cloudinary.com/deor0br3s/image/upload/v1522904738/glacier6.jpg',
  order: 7)

listing_photos13 = ListingPhoto.create!(listing_id: listing2.id,
  img_url: 'http://res.cloudinary.com/deor0br3s/image/upload/v1523035592/lawn_chairs.jpg',
  order: 3)

listing_photos14 = ListingPhoto.create!(listing_id: listing2.id,
  img_url: 'http://res.cloudinary.com/deor0br3s/image/upload/v1523035573/wild_strawberries.jpg',
  order: 4)

listing_photos15 = ListingPhoto.create!(listing_id: listing2.id,
  img_url: 'http://res.cloudinary.com/deor0br3s/image/upload/v1523035573/strawberry_fields.jpg',
  order: 5)
