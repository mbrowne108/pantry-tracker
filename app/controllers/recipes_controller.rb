class RecipesController < ApplicationController
    def index
        render json: Recipe.all, status: 200
    end

    def show
        recipe = find_recipe
        render json: recipe, status: 200
    end

    def destroy
        recipe = find_recipe
        recipe.destroy
        head :no_content
    end

    def create
        recipe = Recipe.create!(recipe_params)
        render json: recipe, status: :created
    end

    private

    def find_recipe
        Recipe.find(params[:id])
    end

    def recipe_params
        params.permit(:name, :instructions)
    end
end
