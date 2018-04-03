class AddPwDigestTousers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :password_digest, :string, presence: true
  end
end
