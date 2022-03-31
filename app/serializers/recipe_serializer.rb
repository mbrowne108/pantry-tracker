class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :instructions
  has_many :ingredients, serializer: RecipeIngredientSerializer
  has_one :user
  
end
