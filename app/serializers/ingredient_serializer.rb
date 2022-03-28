class IngredientSerializer < ActiveModel::Serializer
  attributes :id, :name, :amount, :measurement 
  has_many :recipes
end
