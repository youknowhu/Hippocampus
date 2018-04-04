class CreateBookings < ActiveRecord::Migration[5.1]
  def change
    create_table :bookings do |t|
      t.integer :guest_id, null: false
      t.integer :listing_id, null: false
      t.date :start_date, null: false
      t.date :end_date, null: false
      t.integer :num_guests, null: false
      t.float :total_cost, null: false
      t.timestamps
    end

    add_index :bookings, :guest_id
    add_index :bookings, :listing_id
  end
end
