class Listing < ApplicationRecord

  def add_like
    self.like = self.like + 1
    self.save
  end
end
