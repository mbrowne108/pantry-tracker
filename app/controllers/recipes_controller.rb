class RecipesController < ApplicationController
    skip_before_action :authorize, only: :index
    wrap_parameters format: []  
    
    def index
        # recipes = Recipe.all.each {|rec| rec.ingredients.order(:name)}
        render json: Recipe.all
    end

    def show
        recipe = find_recipe
        render json: recipe, status: 200
    end

    def destroy
        recipe = find_recipe
        if recipe.user == current_user
            recipe.destroy
            render json: {}
        else
            render json: { errors: ["You are not authorized to delete this recipe"] }, status: :unauthorized
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
        params.permit(:name, :instructions, measurements: [], ingredient_ids: [])
    end
end
