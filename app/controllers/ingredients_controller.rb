class IngredientsController < ApplicationController
    def index
        render json: Ingredient.all, status: 200
    end

    def show
        ingredient = find_ingredient
        render json: ingredient, status: 200
    end

    def destroy
        ingredient = find_ingredient
        ingredient.destroy
        head :no_content
    end

    def create
        ingredient = Ingredient.create!(ingredient_params)
        render json: ingredient, status: :created
    end

    private

    def find_ingredient
        Ingredient.find_by(id: params[:id])
    end

    def ingredient_params
        params.permit(:name, :amount, :measurement)
    end
end
