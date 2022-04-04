class RecIngSerializer < ActiveModel::Serializer
  attributes :id, :name, :amount, :in_shopping_list, :created_at
end
