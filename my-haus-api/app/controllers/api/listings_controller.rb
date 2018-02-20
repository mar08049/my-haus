class Api::ListingsController < ApplicationController
  before_action :set_listing, only: [:show, :update, :destroy]

  def index
    render json: Listing.all
  end

  def show
   render json: @listing
  end

  def create
    @listing = Listing.new(listing_params)
    if @listing.save
      render json: @listing
    else
      render json: { message: @listing.errors }, status: 400
    end
  end

  def update
   if @listing
     @listing.add_like
     render json: @listing
   else
     render json: { message: @listing.errors }, status: 400
   end
  end

  def destroy
    if @listing.destroy
      render json: @listing
    else
      render json: { message: "Unable to destroy"}, status: 400
    end
  end

  private

  def set_listing
    @listing = Listing.find_by(id: params[:id])
  end

  def listing_params
    params.fetch(:listing, {}).permit(:title, :location, :price, :description, :img_url, :agent_name, :agent_number, :agent_email, :like)
  end
end
