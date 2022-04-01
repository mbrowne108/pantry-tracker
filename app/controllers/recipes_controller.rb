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
        render json: {}
    end

    def create
        recipe = @current_user.recipes.create!(recipe_params)
        render json: recipe, status: :created
    end

    private

    def find_recipe
        Recipe.find_by(id: params[:id])
    end

    def recipe_params
        params.permit(:name, :instructions)
    end
end
