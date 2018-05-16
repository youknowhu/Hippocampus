class CreateSaves < ActiveRecord::Migration[5.1]
  def change
    create_table :saves do |t|
      t.integer :user_id, null: false
      t.integer :listing_id, null: false
      t.timestamps
    end

    add_index :saves, :user_id
    add_index :saves, :listing_id
  end
end
