class IngredientSerializer < ActiveModel::Serializer
  attributes :id, :name, :amount, :measurement , :in_shopping_list
  has_one :user
  
  has_many :recipes
end
