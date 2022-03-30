import React from 'react';

function RecipeCard({ recipe, itemColor, onUpdateIngredient }) {
    const splitInstructions = recipe.instructions.split(/\r?\\n/)
    
    return (
        <div className='accordion-item'>
            <div className="card-header accordion-header">
                <button 
                    className='accordion-button' 
                    type='button' 
                    data-bs-toggle="collapse" 
                    data-bs-target={`#recipe-details-${recipe.id}`}
                >{recipe.name}</button>
            </div>
            <div id={`recipe-details-${recipe.id}`} className='card-body accordion-collapse collapse hide'>
                <h5>Ingredients:</h5>
                <ul className="list-group">
                    {recipe.ingredients.map((ingredient) => {
                        return (
                            <div className='row container' key={ingredient.id}>
                                <h6 className={`list-group-item-${itemColor(ingredient)} col-sm-5`}>{ingredient.name}</h6>
                                <button className='btn btn-primary btn-sm col-sm-1'>🛒</button>
                            </div>
                        )
                    })}
                </ul>
                <h5>Instructions:</h5>
                {splitInstructions.map((inst) => {
                    return <p className='col-sm-8'>{inst}</p>
                })}
            </div>
        </div>
    )
}

export default RecipeCard;