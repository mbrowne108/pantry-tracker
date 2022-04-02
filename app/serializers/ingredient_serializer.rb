class IngredientSerializer < ActiveModel::Serializer
  attributes :id, :name, :amount, :measurement , :in_shopping_list
  has_many :recipes
  has_one :user
  
end
