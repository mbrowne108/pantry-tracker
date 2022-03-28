import React from 'react';
import RecipeCard from './RecipeCard.js'

function RecipesContainer({ recipes }) {
  return (
    <div>
      <h3>Recipes</h3>
      {recipes.map((recipe) => {
        return <RecipeCard key={recipe.id} recipe={recipe}/>
      })}
    </div>
  );
}

export default RecipesContainer;