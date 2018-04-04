class AddIconUrlColumn < ActiveRecord::Migration[5.1]
  def change
    add_column :listings, :icon_url, :string
  end
end
