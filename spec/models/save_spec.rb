require 'rails_helper'

RSpec.describe Save,  type: :model do
  it { should validate_presence_of(:user_id) }
  it { should validate_presence_of(:listing_id) }
  it { should belong_to(:user) }
  it { should belong_to(:listing) }
end
