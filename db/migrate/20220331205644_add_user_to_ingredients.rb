class AddUserToIngredients < ActiveRecord::Migration[6.1]
  def change
    add_column :ingredients, :user_id, :integer
  end
end
