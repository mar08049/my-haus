class ListingSerializer < ActiveModel::Serializer
  attributes :id, :title, :location, :description, :price, :agent_name, :agent_number, :agent_email, :img_url, :id, :like
end
