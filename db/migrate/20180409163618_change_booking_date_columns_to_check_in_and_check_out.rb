class ChangeBookingDateColumnsToCheckInAndCheckOut < ActiveRecord::Migration[5.1]
  def change
    rename_column :bookings, :start_date, :check_in
    rename_column :bookings, :end_date, :check_out
  end
end
