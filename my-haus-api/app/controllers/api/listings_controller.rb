class Api::ListingsController < ApplicationController

  def index
    render json: Listing.all
  end

  def show
    render json: Listing.find_by(id: params[:id])
  end

  def create
    listing = Listing.new(listing_params)
    if listing.save
      render json: listing
    else
      render json: { message: listing.errors }, status: 400
    end
  end

  def update
    listing = Listing.find_by(id: params[:id])

  def destroy
  end

  private
  def listing_parmas
    params.require(:listing).permit(:title, :location, :price, :description, :availability)
  end
end
