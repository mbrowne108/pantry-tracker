class RecipeIngredientSerializer < ActiveModel::Serializer
  attributes :id, :name, :amount, :in_shopping_list
  has_one :recipe
  has_one :ingredient
end
