import React from 'react';

function RecipeCard({ recipe }) {
    return (
        <div>
            <h4>{recipe.name}</h4>
            <ul>
                {recipe.ingredients.map((ingredient) => {
                return <li key={ingredient.id}>{ingredient.name}</li>
                })}
            </ul>
            <p>{recipe.instructions}</p>
        </div>
    )
}

export default RecipeCard;