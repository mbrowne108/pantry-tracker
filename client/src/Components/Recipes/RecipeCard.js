import React from 'react';

function RecipeCard({ recipe, itemColor, onUpdateIngredient, onDeleteRecipe }) {
    const newInstructions = recipe.instructions.replaceAll('\\n','\n')
    const splitInstructions = newInstructions.split(/\r?\n/)
    const measurements = recipe.measurements.replace('[','').replace(']','').replaceAll('"', '').split(', ')
    const ingredients = recipe.ingredients.map((ing,i) => Object.assign(ing, {measurement: measurements[i]}))

    function handleDelete() {
        const result = window.confirm(`Are you sure you want to delete ${recipe.name}?`)
        if (result) {
            fetch(`/recipes/${recipe.id}`, {
                method: "DELETE",
            })
                .then(r => r.json())
                .then(() => onDeleteRecipe(recipe))
        }  
    }
    
    return (
        <div className='accordion-item'>
            <div className="card-header">
                <button 
                    className='accordion-button h3' 
                    type='button' 
                    data-bs-toggle="collapse" 
                    data-bs-target={`#recipe-details-${recipe.id}`}
                >{recipe.name} 
                </button>
            </div>
            <div id={`recipe-details-${recipe.id}`} className='card-body accordion-collapse collapse hide'>
                <h5>Ingredients:</h5>
                <div className='list-group list-group-horizontal'>
                    <ul className={`list-group-item col-6`}>
                        {ingredients.map((ingredient) => {
                            return (
                                <div className='row' key={ingredient.id}>
                                    <h6 className={`list-group-item-${itemColor(ingredient)} p-2`}>{ingredient.measurement} — {ingredient.name}</h6> 
                                </div>
                            )
                        })}
                    </ul>
                </div>
                <h5>Instructions:</h5>
                {splitInstructions.map((inst) => {
                    return <p key={inst} className='col-8'>{inst}</p>
                })}
                <button className='btn btn-primary btn-lg fa fa-trash' onClick={handleDelete}></button>
            </div>
        </div>
    )
}

export default RecipeCard;