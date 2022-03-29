class AddShoppingListToIngredients < ActiveRecord::Migration[6.1]
  def change
    add_column :ingredients, :in_shopping_list, :boolean
  end
end
