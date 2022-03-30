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
        if ingredient.valid?
            render json: ingredient, status: :created
        else
            render json: { error: "Ingredient not valid" }, status: :unprocessable_entity
        end
    end

    def update
        ingredient = find_ingredient
        if ingredient
            ingredient.update(ingredient_params)
            render json: ingredient
        else
            render json: { error: "Ingredient not found" }, status: :not_found
        end
    end

    private

    def find_ingredient
        Ingredient.find_by(id: params[:id])
    end

    def ingredient_params
        params.permit(:name, :amount, :measurement, :in_shopping_list)
    end
end
