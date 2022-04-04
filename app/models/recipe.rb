class Recipe < ApplicationRecord
    has_many :recipe_ingredients
    has_many :ingredients, -> {order("created_at")}, through: :recipe_ingredients, dependent: :destroy
    belongs_to :user

    validates :name, presence: true, uniqueness: true
    validates :instructions, presence: true
    validates :measurements, presence: true
end
