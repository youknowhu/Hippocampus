require 'rails_helper'

RSpec.describe ListingPhoto,  type: :model do
  it { should validate_presence_of(:listing_id) }
  it { should validate_presence_of(:img_url) }
  it { should validate_presence_of(:order) }
  it { should belong_to(:listing) }
end
