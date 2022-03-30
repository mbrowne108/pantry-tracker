class Ingredient < ApplicationRecord
    has_many :recipe_ingredients
    has_many :recipes, through: :recipe_ingredients

    validates :name, presence: true, uniqueness: true
    validates :amount, presence: true, numericality: true
    validates :measurement, presence: true
end
