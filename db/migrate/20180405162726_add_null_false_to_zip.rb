class AddNullFalseToZip < ActiveRecord::Migration[5.1]
  def change
    change_column :users, :zip, :string, null: false
  end
end
