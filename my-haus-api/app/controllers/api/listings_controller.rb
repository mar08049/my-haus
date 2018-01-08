class Api::ListingsController < ApplicationController
  before_action :set_listing, only: [:show, :update, :destroy]

  def index
    @listings = Listing.all
    render json: @listings
  end

  def show
    render json: @listing
  end

  def create
    @listing = Listing.new(listing_params)
    if @listing.save
      render json: @listing
    else
    end
  end

  def update
   @listing.update(listing_params)
   render json: @listing
  end

  def destroy
    if @listing.destroy
      render status: 204
    else
      
    end
  end

  private

  def set_listing
    @listing = Listing.find_by(id: params[:id])
  end

  def listing_params
    params.require(:listing).permit(:title, :location, :price, :description, :agent_name, :agent_number, :agent_email)
  end

end
