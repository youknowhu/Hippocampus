require 'rails_helper'

RSpec.describe Booking,  type: :model do
  it { should validate_presence_of(:guest_id) }
  it { should validate_presence_of(:listing_id) }
  it { should validate_presence_of(:check_in) }
  it { should validate_presence_of(:check_out) }
  it { should validate_presence_of(:num_guests) }
  it { should belong_to(:listing) }
  it { should belong_to(:guest) }
end
