class DropColumn < ActiveRecord::Migration[5.1]
  def change
    remove_column :listings, :availability
  end
end
