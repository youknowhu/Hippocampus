class CreateListings < ActiveRecord::Migration[5.1]
  def change
    create_table :listings do |t|
      t.integer :host_id, null: false
      t.string :title, null: false
      t.text :body, null: false
      t.integer :daily_cost, null: false
      t.boolean :is_private, null: false
      t.boolean :is_camping, null: false
      t.boolean :allow_pets, null: false
      t.integer :max_capacity, null: false
      t.string :check_in_after, null: false
      t.string :check_out_after, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.timestamps
    end

    add_index :listings, :host_id
  end
end
