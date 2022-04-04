import React from 'react';

function RecipeCard({ recipe, itemColor, onUpdateIngredient, onDeleteRecipe }) {
    const newInstructions = recipe.instructions.replaceAll('\\n','\n')
    const splitInstructions = newInstructions.split(/\r?\n/)
    const measurements = recipe.measurements.replace('[','').replace(']','').replaceAll('"', '').split(', ')

    function handleUpdate(e) {
        const ingredient = recipe.ingredients[e.target.value]
        fetch(`/ingredients/${ingredient.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                in_shopping_list: !ingredient.in_shopping_list 
            }),
        })
            .then(r => r.json())
            .then((updatedIngredient) => onUpdateIngredient(updatedIngredient))
    } 

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
                    <ul className="list-group-item col-2">
                        {measurements.map((measurement, index) => {
                            return (
                                <div className='row' key={index}>
                                    <h6 className='list-group-item-black mb-3 col-10'>{measurement}</h6>
                                </div>
                            )
                        })}
                    </ul>
                    <ul className={`list-group-item col-4`}>
                        {recipe.ingredients.map((ingredient, index) => {
                            return (
                                <div className='row' key={ingredient.id}>
                                    <h6 className={`list-group-item-${itemColor(ingredient)} mb-3 col-9`}>{ingredient.name}</h6>
                                    {!ingredient.in_shopping_list ? 
                                        <button className='btn btn-primary active btn-sm col-3' value={index} onClick={handleUpdate}>🛒</button> :
                                        <button className='btn btn-primary btn-sm col-3' disabled>🛒</button>
                                    }
                                </div>
                            )
                        })}
                    </ul>

                </div>
                
                <h5>Instructions:</h5>
                {splitInstructions.map((inst) => {
                    return <p key={inst} className='col-8'>{inst}</p>
                })}
                <button className='btn btn-primary btn-sm' onClick={handleDelete}>❌ Delete Recipe</button>
            </div>
        </div>
    )
}

export default RecipeCard;