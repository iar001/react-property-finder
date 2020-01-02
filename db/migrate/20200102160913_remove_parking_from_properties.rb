class RemoveParkingFromProperties < ActiveRecord::Migration[6.0]
  def change

    remove_column :properties, :parking, :integer
  end
end
