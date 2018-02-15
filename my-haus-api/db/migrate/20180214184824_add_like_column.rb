class AddLikeColumn < ActiveRecord::Migration[5.1]
  def change
    add_column :listings, :like, :integer
  end
end
