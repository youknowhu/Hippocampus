class AddZipToUserModel < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :zip, :string
  end
end
