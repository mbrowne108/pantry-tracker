class RecipesController < ApplicationController
    skip_before_action :authorize, only: [:index]
    wrap_parameters format: []  
    
    def index
        render json: Recipe.all, status: 200
    end

    def show
        recipe = find_recipe
        render json: recipe, status: 200
    end

    def destroy
        recipe = find_recipe
        if recipe.user == @current_user
            recipe.destroy
            render json: {}
        else
            render json: { errors: ["Not authorized"] }, status: :unauthorized
        end
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
        params.permit(:name, :instructions, ingredient_ids: [])
    end
end
