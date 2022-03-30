import React from 'react';
import RecipeCard from './RecipeCard.js'
import NewRecipeForm from './NewRecipeForm.js'

function Recipes({ recipes, itemColor, onUpdateIngredient }) {
  return (
    <div>
      <br/>
      <div className="container accordion">
        <h3 className='text-center'>Recipes</h3>
        {recipes.map((recipe) => {
          return <RecipeCard key={recipe.id} recipe={recipe} onUpdateIngredient={onUpdateIngredient} itemColor={itemColor} />
        })}
      </div>
      <br/>
      <div className="container text-center"> 
        <button className="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#form">Add New Recipe</button>
      </div>
      <NewRecipeForm /> 
    </div>
  );
}

export default Recipes;