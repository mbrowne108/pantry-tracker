import React from 'react';
import RecipeCard from './RecipeCard.js'
import NewRecipeForm from './NewRecipeForm.js'

function Recipes({ recipes, ingredients, itemColor, onUpdateIngredient, onDeleteRecipe, onNewRecipe }) {
  const sortedRecipes = recipes.sort((a, b) => a.id - b.id)
  
  return (
    <div>
      <br/>
      <div className="container accordion">
        <h3 className='text-center display-6'>Recipes</h3>
        {sortedRecipes.map((recipe) => {
          return <RecipeCard key={recipe.id} recipe={recipe} onUpdateIngredient={onUpdateIngredient} onDeleteRecipe={onDeleteRecipe} itemColor={itemColor} />
        })}
      </div>
      <br/>
      <div className="container text-center"> 
        <button className="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#form">Add New Recipe</button>
      </div>
      <br/>
      <NewRecipeForm ingredients={ingredients} onNewRecipe={onNewRecipe} /> 
    </div>
  );
}

export default Recipes;