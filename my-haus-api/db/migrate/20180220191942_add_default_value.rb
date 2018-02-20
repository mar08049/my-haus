class AddDefaultValue < ActiveRecord::Migration[5.1]
  def change
    change_column :listings, :like, :integer, default: 0
  end
end
