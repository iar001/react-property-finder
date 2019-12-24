class PropertiesController < ApplicationController
  before_action :set_property, only: [:show, :update, :destroy]
  before_action :authorize_request, except: %i[index show]



  # GET /properties
  def index
    @properties = Property.all

    render json: @properties, include: :user
  end

  # GET /properties/1
  def show
    render json: @property, include: :user
  end

  # POST /properties
  def create
    @property = Property.new(property_params)

    if @current_user.properties << @property
      render json: @property, status: :created, location: @property
    else
      render json: @property.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /properties/1
  def update
    if @property.update(property_params)
      render json: @property
    else
      render json: @property.errors, status: :unprocessable_entity
    end
  end

  # DELETE /properties/1
  def destroy
    @property.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_property
      @property = Property.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def property_params
      params.require(:property).permit(:name, :address, :price, :rooms, :bathrooms, :photo)
    end
end
