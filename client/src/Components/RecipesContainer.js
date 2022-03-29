import React from 'react';
import RecipeCard from './RecipeCard.js'

function RecipesContainer({ recipes }) {
  return (
    <div>
      <br/>
      <div className="container accordion">
        <h3 className='text-center'>Recipes</h3>
        {recipes.map((recipe) => {
          return <RecipeCard key={recipe.id} recipe={recipe}/>
        })}
      </div>
    </div>
  );
}

export default RecipesContainer;