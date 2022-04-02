class AddMeasurementsColumnToRecipes < ActiveRecord::Migration[6.1]
  def change
    add_column :recipes, :measurements, :string
  end
end
