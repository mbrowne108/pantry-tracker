import React from 'react';
import RecipeCard from './RecipeCard.js'

function RecipesContainer({ recipes }) {
  return (
    <div className="row">
      <div className="col-sm-6 accordion">
        <h3>Recipes</h3>
        {recipes.map((recipe) => {
          return <RecipeCard key={recipe.id} recipe={recipe}/>
        })}
      </div>
      <div className="col-sm-6">Placeholder</div>  
    </div>
  );
}

export default RecipesContainer;