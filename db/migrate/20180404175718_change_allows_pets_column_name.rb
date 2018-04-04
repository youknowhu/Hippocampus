class ChangeAllowsPetsColumnName < ActiveRecord::Migration[5.1]
  def change
    rename_column :listings, :allow_pets, :allows_pets
  end
end
