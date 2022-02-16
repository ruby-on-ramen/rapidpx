class AddRouteAttributeToMedication < ActiveRecord::Migration[6.1]
  def change
    add_column :medications, :route, :string
  end
end
