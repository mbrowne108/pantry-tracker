class RecipeIngredientSerializer < ActiveModel::Serializer
  attributes :id, :name, :amount
  has_one :recipe
  has_one :ingredient
end
