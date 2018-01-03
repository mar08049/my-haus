class AddColumnsListings < ActiveRecord::Migration[5.1]
  def change
    add_column :listings, :agent_name, :string
    add_column :listings, :agent_number, :integer
    add_column :listings, :agent_email, :string
  end
end
