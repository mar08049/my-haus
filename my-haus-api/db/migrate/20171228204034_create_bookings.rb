class CreateBookings < ActiveRecord::Migration[5.1]
  def change
    create_table :bookings do |t|
      t.date :date
      t.integer :user_id
      t.integer :listing_id

      t.timestamps
    end
  end
end
