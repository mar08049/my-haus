class CreateListings < ActiveRecord::Migration[5.1]
  def change
    create_table :listings do |t|
      t.string :title
      t.string :location
      t.string :description
      t.integer :price
      t.boolean :availability

      t.timestamps
    end
  end
end
