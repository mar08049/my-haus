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
      render json: { errors: ( message: "This Listing failed to save.")}
    end
  end

  def update
    if @listing.update(listing_params)
      render json: @listing
    else
      render json: { message: listing.errors }, status: 400
    end
  end

  def destroy
    if @listing.destroy
      render status: 204
    else
      render json: { message: "Unable to Destroy"}, status: 400
    end
  end

  private

  def listing_parmas
    params.require(:listing).permit(:title, :location, :price, :description, :agent_name, :agent_number, :agent_email)
  end
