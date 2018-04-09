class RemoveTotalCostColumnFromBooking < ActiveRecord::Migration[5.1]
  def change
    remove_column :bookings, :total_cost
  end
end
