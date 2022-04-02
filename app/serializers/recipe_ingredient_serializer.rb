class RecipeIngredientSerializer < ActiveModel::Serializer
  has_one :recipe
  has_one :ingredient
end
