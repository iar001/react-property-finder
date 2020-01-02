class AddParkingToProperties < ActiveRecord::Migration[6.0]
  def change
    add_column :properties, :parking, :integer, default: 0
  end
end
