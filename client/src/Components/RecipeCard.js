import React from 'react';

function RecipeCard({ recipe }) {
    return (
        <div className='accordion-item'>
            <div className="accordion-header">
                <button 
                    className='accordion-button' 
                    type='button' 
                    data-bs-toggle="collapse" 
                    data-bs-target={`#recipe-details-${recipe.id}`}
                >{recipe.name}</button>
            </div>
            <div id={`recipe-details-${recipe.id}`} className='accordion-collapse collapse hide'>
                <h5>Ingredients:</h5>
                <ul>
                    {recipe.ingredients.map((ingredient) => {
                        return <li key={ingredient.id}>{ingredient.name}</li>
                    })}
                </ul>
                <h5>Instructions:</h5>
                <p>{recipe.instructions}</p>
            </div>
        </div>
    )
}

export default RecipeCard;