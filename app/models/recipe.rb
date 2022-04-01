class Recipe < ApplicationRecord
    has_many :recipe_ingredients
    has_many :ingredients, through: :recipe_ingredients, dependent: :destroy
    belongs_to :user

    validates :name, presence: true, uniqueness: true
    validates :instructions, presence: true
end
