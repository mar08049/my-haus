class AddImg < ActiveRecord::Migration[5.1]
  def change
    add_column :listings, :img_url, :string
  end
end
