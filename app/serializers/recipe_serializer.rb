class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :instructions, :measurements
  has_many :ingredients, serializer: RecIngSerializer
  has_one :user
  
end
