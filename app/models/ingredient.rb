class Ingredient < ApplicationRecord
    has_many :recipe_ingredients
    has_many :recipes, through: :recipe_ingredients, dependent: :destroy
    belongs_to :user

    validates :name, presence: true
    validates :amount, presence: true, numericality: true
    validates :measurement, presence: true
end
