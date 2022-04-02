class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :instructions
  has_many :ingredients, serializer: RecIngSerializer
  has_one :user
  
end
