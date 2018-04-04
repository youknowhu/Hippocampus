class ChangeCheckOutColumn < ActiveRecord::Migration[5.1]
  def change
    rename_column :listings, :check_out_after, :check_out_before
  end
end
