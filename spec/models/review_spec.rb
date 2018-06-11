require 'rails_helper'

RSpec.describe Review,  type: :model do
  it { should validate_presence_of(:user_id) }
  it { should validate_presence_of(:listing_id) }
  it { should validate_presence_of(:body) }
  it { should belong_to(:listing) }
  it { should belong_to(:user) }
end
